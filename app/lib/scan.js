// import { GoogleAIFileManager } from "@google/generative-ai/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

// const fileManager = new GoogleAIFileManager(GEMINI_API_KEY);
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });



export async function findCorrections(docData, mimeType) {
    let prompt;
    
    const filePart = {
        inlineData: {
            data: docData,
            mimeType: mimeType,
        },
    };

    if (docData){
        prompt = `As professional grad school application letter editor,
        Analyze this letter and be sure to make corrections and suggestions (at least 1).
        Indicate the degree of importance of each correction you are making (Critical, Bad or Regular),
        You may even also indicate strong support of a part only if you think it is exceedingly great. (Awesome).
        Note that importance of a correction may make lower ones unnecessary to point out so don't bother to indicate those.
        type Correction = {
            description: string;
            degree: "critical" | "bad" | "warning" | "awesome";
        };
        In the format { corrections: Correction[] }
        I want this in proper and exact json format.
        If it is not strictly an application letter, you must point that out as a negative in the corrections.
        If you think there are no corrections to be made, review it, it has to be perfect for a grad school application`;

    }

    const generatedContent = await model.generateContent([filePart, prompt]);

    return generatedContent;
}