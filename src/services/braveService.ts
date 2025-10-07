import axios from "axios";
import { config } from "../config/env";

const BRAVE_API_URL = "https://api.search.brave.com/res/v1/web/search";

export interface BraveResult {
  title: string;
  url: string;
  snippet: string;
}

class BraveService {
  async search(query: string): Promise<BraveResult[]> {
    try {
      const response = await axios.get(BRAVE_API_URL, {
        headers: {
          Accept: "application/json",
          "X-Subscription-Token": config.BRAVE_API_KEY,
        },
        params: { q: query, count: 5 },
      });

      const results = response.data.web?.results || [];
      return results.slice(0, 5).map((item: any) => ({
        title: item.title,
        url: item.url,
        snippet: item.description || "",
      }));
    } catch (error: any) {
      console.error("Error fetching from Brave:", error.message);
      throw new Error("Failed to fetch search results from Brave API");
    }
  }
}

export default new BraveService();
