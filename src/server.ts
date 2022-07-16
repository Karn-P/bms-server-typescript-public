import express, { Application } from "express";
import { Server } from "http";
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
