import { GoogleGenerativeAI } from "@google/generative-ai";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);


export async function getRecommendations(description) {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" })

    const prompt = `Generate detailed suggestions for this Grad school application letter by me.
        Only make highly relevant suggestions and no need to suggest if it is ok.
        My text: ${description}
        In the format { suggestions: string[] }
        I want this in proper json format.
        If and only if there is no suggestion because it is already great, you may return an empty as suggestions value list
        `;

    const generatedContent = await model.generateContent(prompt)

    return generatedContent
}

