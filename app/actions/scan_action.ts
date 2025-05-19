
"use server";

import fs from "fs/promises";
import path from "path";
import { findCorrections, findIngredients } from "../lib/scan";
import { cleanJSON, importExternalImage } from "../lib/helpers";
import { Scanned } from "../lib/definitions";
import { TEMPDIR } from "@/next.config";



export async function deduceFromDoc(json: { docSrc: string, tmpSrc: string }) {
  const {docSrc, tmpSrc} = json;

  let localFileName = tmpSrc, doc_blob
  let filePath = path.join(TEMPDIR, `uploads_${localFileName}`);


  try {
    doc_blob = await fs.readFile(filePath);

  } catch {
    // check if file exists
    localFileName = await importExternalImage(docSrc) ?? "";

    if (!localFileName)
      return { success: false, error: "File not found" };

  }


  const image_data = doc_blob.toString("base64");

  try {
    const ai_response = await findCorrections(image_data);
    const scanned = cleanJSON(ai_response) as Scanned;

    return { success: true, data: scanned, imgUrl: localFileName };

  } catch (err) {
    console.log(err)
    return { success: false, error: "Error prompting AI model" };
  }
}
