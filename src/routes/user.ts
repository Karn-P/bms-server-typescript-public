import { Request, Response, Router } from "express";
import usercontrollers from "../controllers/user.controller";

const router: Router = Router();

router.get("/", async (req: Request, res: Response) => {
  res.status(200).send("Please insert number of cells!");
});

router.get("/:cells", usercontrollers.onGetAllParameter);
router.get("/parameters/:cells", usercontrollers.onGetValueOnce);
router.get("/parameters/:cells/:name", usercontrollers.onGetAllOnceByname);
router.get("/history/:cells", usercontrollers.onGetHistory);

// //* Update parameters from user.
router.get("/update/:cells", usercontrollers.onGetUpdates);
router.put("/update/:cells", usercontrollers.onUpdates);
router.patch("/update/:cells", usercontrollers.onUpdate);

export default router;
