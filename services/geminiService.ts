
import { GoogleGenAI } from "@google/genai";
import { FERRARI_MODELS } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export async function getConciergeResponse(userMessage: string, history: { role: 'user' | 'model', text: string }[]) {
  const model = ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: [
        ...history.map(h => ({ role: h.role, parts: [{ text: h.text }] })),
        { role: 'user', parts: [{ text: userMessage }] }
    ],
    config: {
      systemInstruction: `You are the Ferrari Virtual Concierge at "Scuderia Vision", a high-end luxury dealership. 
      Your tone is extremely elegant, professional, and exclusive. 
      You know everything about the current Ferrari lineup: SF90 Stradale, 812 GTS, and Ferrari Roma. 
      Data about cars: ${JSON.stringify(FERRARI_MODELS)}.
      Help the client choose the right car, explain the heritage of Ferrari, and guide them towards contacting us for a private appointment.
      Keep responses concise and luxurious.`,
      temperature: 0.7,
    },
  });

  const response = await model;
  return response.text;
}
