import { Request, Response, NextFunction } from "express";
import { getPaginatedData } from "../services/dataService";

export const getData = (req: Request, res: Response, next: NextFunction) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;

  const { data, total } = getPaginatedData(page, limit);
  res.json({ data, total, page, limit });
};
