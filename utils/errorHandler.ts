import { Request, Response, NextFunction } from "express";
import * as boom from "boom";

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (res.headersSent) return next(err);
  if (!err.statusCode) err = boom.boomify(err);

  if (err.isServer) {
    console.error(err);
  }
  return err.isBoom
    ? res.status(err.output.statusCode).json(err.output.payload)
    : res.status(err.statusCode).json(err);
};
