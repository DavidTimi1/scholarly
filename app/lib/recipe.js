import { GoogleGenerativeAI } from "@google/generative-ai";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);


export async function getRecs(description) {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" })

    const convo = model.startChat({ history });

    const prompt = `Generate detailed corrections for this Grad school application letter by me. 
        My text: ${description}
        In the format Corrections: string[] }
        `;

    const generatedContent = await convo.sendMessage(prompt)

    return generatedContent
}

