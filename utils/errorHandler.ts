import { Request, Response, NextFunction } from "express";
import * as boom from "boom";

export const errorHandler = (
  err: any, // eslint-disable-line @typescript-eslint/no-explicit-any
  req: Request,
  res: Response,
  next: NextFunction
): void | Response => {
  if (res.headersSent) return next(err);
  if (!err.statusCode) err = boom.boomify(err);

  if (err.isServer) {
    console.error(err);
  }
  return err.isBoom
    ? res.status(err.output.statusCode).json(err.output.payload)
    : res.status(err.statusCode).json(err);
};
