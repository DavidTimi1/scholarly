
"use server";

import fs from "fs/promises";
import path from "path";
import { findCorrections } from "../lib/scan";
import { cleanJSON, importExternalDoc } from "../lib/helpers";
import { TEMPDIR } from "@/next.config";
import { Correction } from "../lib/definitions";



export async function deduceFromDoc(json: { docSrc: string, tmpSrc: string }) {
  const {docSrc, tmpSrc} = json;

  let localFileName = tmpSrc, doc_blob;

  do { 
    let filePath = path.join(TEMPDIR, `uploads_${localFileName}`);

    try {
      doc_blob = await fs.readFile(filePath);

    } catch {
      // check if file exists
      localFileName = await importExternalDoc(docSrc) ?? "";

      if (!localFileName)
        return { success: false, error: "File not found" };
    }

  } while (!doc_blob);


  const image_data = doc_blob.toString("base64");

  try {
    const ai_response = await findCorrections(image_data);
    const scanned = cleanJSON(ai_response) as {corrections: string[]};

    return { success: true, data: scanned, docUrl: localFileName };

  } catch (err) {
    console.log(err)
    return { success: false, error: "Error prompting AI model" };
  }
}
