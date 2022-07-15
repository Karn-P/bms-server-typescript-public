import express, {
  Application,
  ErrorRequestHandler,
  NextFunction,
  Request,
  Response,
} from "express";
import { Server } from "http";
import createHttpError from "http-errors";
import expressConfig from "./configs/express";
import route from "./routes";
const app: Application = express();
const config: any = "./configs/app";

expressConfig(app);
app.use(route);

const PORT: number = config.PORT || 3001;
const server: Server = app.listen(PORT, () => {
  console.log(`Server is on Port ${PORT}`);
});

// app.get("/", (req: Request, res: Response, next: NextFunction) => {
//   res.send("Hello from ts server");
// });

// app.use((req: Request, res: Response, next: NextFunction) => {
//   next(new createHttpError.NotFound());
// });

// const errorHandler: ErrorRequestHandler = (
//   err,
//   req: Request,
//   res: Response
// ) => {
//   res.status(err.status || 500);
//   res.send({
//     status: err.status || 500,
//     message: err.message,
//   });
// };

// app.use(errorHandler);
