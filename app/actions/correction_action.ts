
"use server";

import fs from "fs/promises";
import path from "path";
import { getRecs } from "../lib/recipe";
import { cleanJSON, getUserID, importExternalImage } from "../lib/helpers";
import { randomUUID } from "crypto";
import { TEMPDIR } from "@/next.config";
import { addSeshHistory } from "../lib/session";

interface DetailsProps {
    details: string,
}


export default async function CorrectionAction({details}: DetailsProps){    
    // Retrieve user ID
    const userID = await getUserID();
    const convoID = randomUUID();

    let reccommendations = [];
    
    try {
        const ai_response = await getRecs(details);
        reccommendations = cleanJSON(ai_response);

    } catch(err){
        console.log(err)
        return { success: false, error: "Error prompting AI model" };

    }

    try {
        // await addSeshHistory(userID, convoID, recipe, imgSrc);

        return { success: true, corrections: reccommendations };

    } catch(err) {
        console.error(err)
        return { success: false, error: "Error connecting with DB" };
    }
}



async function convoHistory(tmpFile: string, imgSrc: string | null, prevJSON: string){
    const history = [];
    let localFileName = tmpFile;

    // check if file exists
    if (!localFileName && imgSrc) {
        localFileName = await importExternalImage(imgSrc) ?? "";

        if (!localFileName)
            return [];
    }


    if (imgSrc){
        let filePath = path.join(TEMPDIR, `uploads_${localFileName}`);
        let image_blob;

        try {
            image_blob = await fs.readFile(filePath);

        } catch {
            // check if file exists
            localFileName = await importExternalImage(imgSrc) ?? "";
        
            if (!localFileName)
              return [];
        
            filePath = path.join(TEMPDIR, `uploads_${localFileName}`);
            
            image_blob = await fs.readFile(filePath);

        } finally {
            
            const filePart = {
                inlineData: {
                    data: image_blob?.toString?.("base64"),
                    mimeType: "image/jpeg",
                },
            };
        
            // user initial request
            history.push({
                role: "user",
                parts: [
                    filePart,
                    {
                        text: "As an professional cook in local dishes, Identify what meal\
                        this is in the image and give a list of the ingredients identified in the image\
                        In the format { name: meal_name, ingredients: Array<Ingredient> } no comments, pure json."
                    },
                ]
            });

            // model response (scan)
            history.push({
                role: "model",
                parts: [{
                    text: prevJSON
                }]
            });

        }
    }

    return history;
}
