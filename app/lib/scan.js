// import { GoogleAIFileManager } from "@google/generative-ai/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

// const fileManager = new GoogleAIFileManager(GEMINI_API_KEY);
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });



export async function findCorrections(imgFile) {
    let prompt;
    
    const filePart = {
        inlineData: {
            data: imgFile,
            mimeType: "text/txt",
        },
    };

    if (imgFile){
        prompt = `As professional grad school application letter editor,
        please analyze this letter and provide detailed corrections.
        In the format Corrections: string[].`;

    }

    const convo = model.startChat();
    const generatedContent = await convo.sendMessage([filePart, prompt]);

    return generatedContent;
}