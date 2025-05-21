import { GoogleGenerativeAI } from "@google/generative-ai";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);


export async function getRecommendations(description) {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" })

    const prompt = `Generate detailed suggestions for this Grad school application letter by me. 
        My text: ${description}
        In the format { suggestions: string[] }
        `;

    const generatedContent = await model.generateContent(prompt)

    return generatedContent
}

