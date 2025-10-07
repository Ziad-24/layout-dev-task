import { GoogleGenAI } from "@google/genai";
import { config } from "../config/env";

// Define the Source type if not imported from elsewhere
export type Source = {
  title: string;
  snippet: string;
};

class GeminiService {
  private ai: GoogleGenAI;
  private model: string;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: config.GEMINI_API_KEY });
    this.model = "gemini-2.5-flash";
  }

  async summarizeResearch(query: string, sources: Source[]): Promise<string> {
    try {
      const prompt = `
      You are a research assistant. Summarize the main findings about "${query}"
      based on the following sources:
      ${sources.map((s, i) => `${i + 1}. ${s.title} - ${s.snippet}`).join("\n")}
      Return the summary in concise plain text.
      `;

      const response = await this.ai.models.generateContent({
        model: this.model,
        contents: [
          {
            role: "user",
            parts: [{ text: prompt }],
          },
        ],
      });

      const output =
        response.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
      if (!output) throw new Error("No output text received from Gemini.");

      return output;
    } catch (error: any) {
      console.error("Error in Gemini summarization:", error.message);
      throw new Error(`Gemini summarization failed: ${error.message}`);
    }
  }
}

export default new GeminiService();
