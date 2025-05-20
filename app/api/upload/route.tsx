import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import { randomUUID } from "crypto";
import { TEMPDIR } from "@/next.config";
import { deduceFromDoc } from "@/app/actions/scan_action";


export async function POST(req: NextRequest) {

  try {
    const formData = await req.formData(); // Parse FormData
    const file = formData.get("doc") as File | null;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    // Convert Blob to Buffer
    const buffer = Buffer.from(await file.arrayBuffer());

    // Move file to the desired location
    const ext = file.name.split('.').pop();
    const newFileName = `${randomUUID()}${ext}`;
    const filePath = path.join(TEMPDIR, `uploads_${newFileName}`);

    await fs.writeFile(filePath, buffer);
    
    const response = deduceFromDoc({ docSrc: '', tmpSrc: newFileName })

    return NextResponse.json(response, { status: 200 });

  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
