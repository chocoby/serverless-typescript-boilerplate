import * as express from "express";
import * as asyncHandler from "express-async-handler";
import serverlessHttp =  require("serverless-http");

import { errorHandler } from "./utils/errorHandler";

const app: express.Application = express();
app.use(express.json());

app.get(
  "/",
  asyncHandler(
    async (req: express.Request, res: express.Response): Promise<void> => {
      res.json({});
    }
  )
);

app.use(errorHandler);

export const handler = serverlessHttp(app);
