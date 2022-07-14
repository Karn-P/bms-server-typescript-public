import express, {
  Application,
  ErrorRequestHandler,
  NextFunction,
  Request,
  Response,
} from "express";
import { Server } from "http";
import createHttpError from "http-errors";

const app: Application = express();
const config: any = "./configs/app";
// app.use("./configs/express");
// app.use("./routes");

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello from ts server");
});

app.use((req: Request, res: Response, next: NextFunction) => {
  next(new createHttpError.NotFound());
});

const errorHandler: ErrorRequestHandler = (
  err,
  req: Request,
  res: Response
) => {
  res.status(err.status || 500);
  res.send({
    status: err.status || 500,
    message: err.message,
  });
};

app.use(errorHandler);

const PORT: number = config.PORT || 1337;
const server: Server = app.listen(PORT, () => {
  console.log(`Server is on Port ${PORT}`);
});
