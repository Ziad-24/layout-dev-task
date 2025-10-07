import braveService from "./braveService";
import geminiService from "./geminiService";

class ResearchService {
  async processQuery(query: string) {
    const sources = await braveService.search(query);
    const summary = await geminiService.summarizeResearch(query, sources);

    return { query, summary, sources };
  }
}

export default new ResearchService();
