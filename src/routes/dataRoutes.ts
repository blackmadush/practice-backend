import { Router } from "express";
import { authenticateJWT } from "../middlewares/authMiddleware";
import { getData } from "../controllers/dataController";
export const dataRoutes = Router();

dataRoutes.get("/", authenticateJWT, getData);
