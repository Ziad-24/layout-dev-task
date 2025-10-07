import { Router } from "express";
import { handleResearchQuery } from "../controllers/researchController";

const router = Router();
router.post("/research", handleResearchQuery);

export default router;
