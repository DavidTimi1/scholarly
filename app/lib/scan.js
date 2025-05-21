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
        please analyze this letter and provide detailed corrections.
        Start each good point with ✅ and each bad point with ❌.
        In the format { corrections: string[] }`;

    }

    const generatedContent = await model.generateContent([filePart, prompt]);

    return generatedContent;
}