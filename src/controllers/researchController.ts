import { Request, Response } from "express";
import researchService from "../services/researchService";

export const handleResearchQuery = async (req: Request, res: Response) => {
  try {
    const { query } = req.body;

    if (!query) {
      return res.status(400).json({ error: "Query is required" });
    }

    const result = await researchService.processQuery(query);

    return res.status(200).json(result);
  } catch (error: any) {
    console.error("Error handling research query:", error.message);
    return res.status(500).json({ error: error.message });
  }
};
