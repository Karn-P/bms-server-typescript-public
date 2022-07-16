import { Request, Response, Router } from "express";
import postControllers from "../controllers/post.controller";

const router: Router = Router();
//* routes for post battery parameter.
router.post("/parameters/:cells", postControllers.onPostParameters);

export default router;
