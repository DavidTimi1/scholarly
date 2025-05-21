
"use server";

import fs from "fs/promises";
import path from "path";
import { findCorrections } from "../lib/scan";
import { cleanJSON, importExternalDoc } from "../lib/helpers";
import { TEMPDIR } from "@/next.config";
import { console } from "inspector";
import { Correction } from "../lib/definitions";

type Mimetypes = {
  [key: string]: string;
}

export async function deduceFromDoc(json: { docSrc: string, tmpSrc: string }) {
  const {docSrc, tmpSrc} = json;

  let localFileName = tmpSrc, doc_blob;

  do { 
    const filePath = path.join(TEMPDIR, `uploads_${localFileName}`);

    try {
      doc_blob = await fs.readFile(filePath);

    } catch {
      // check if file exists
      localFileName = await importExternalDoc(docSrc) ?? "";

      if (!localFileName)
        return { success: false, error: "File not found" };
    }

  } while (!doc_blob);
  // detect mimetype
  const ext = localFileName.split(".").pop() ?? 'txt';
  const mimeTypes: Mimetypes = {
    pdf: "application/pdf",
    txt: "text/plain",
    doc: "application/msword",
    png: "image/png",
    jpg: "image/jpeg",
  };

  const mimeType = mimeTypes[ext];
  const documentData = doc_blob.toString("base64");

  try {
    const ai_response = await findCorrections(documentData, mimeType);
    console.log(ai_response.response.text());
    const scanned = cleanJSON(ai_response) as {corrections: Correction[]};

    return { success: true, corrections: scanned.corrections, docUrl: localFileName };

  } catch(err) {
    console.error(err)
    return { success: false, error: "Error prompting AI model" };
  }
}
