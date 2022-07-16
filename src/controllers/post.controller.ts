import { Request, Response } from "express";
import postService from "../services/post.service";

const postController = {
  async onPostParameters(req: Request, res: Response) {
    const { query } = req;
    const { cells } = req.params;
    try {
      const result: any = await postService.postParameters(query, cells);
      result.save();
      res.status(200).send(result);
      console.log(`Record Parameter ${cells} cells successfully!`);
    } catch (error) {
      res.status(500).send(error);
    }
  },
};

export default postController;
