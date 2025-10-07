import { Router } from "express";
import { handleResearchQuery } from "../controllers/researchController";
import { handleResearchStream } from "../controllers/streamResearchController";

const router = Router();
router.post("/research", handleResearchQuery);
router.post("/research/stream", handleResearchStream);

export default router;
