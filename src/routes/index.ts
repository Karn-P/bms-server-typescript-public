import express, { Request, Response, Router } from "express";
import userRoute from "./user";
import postRoute from "./post";

const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Hello, this is bms-server");
});
router.use("/users", userRoute);
router.use("/posts", postRoute);

export default router;
