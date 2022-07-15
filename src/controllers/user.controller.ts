import { Request, Response } from "express";

import userService from "../services/user.service";

const methods = {
  async onGetAllParameter(req: Request, res: Response) {
    const { cells } = req.params;
    try {
      const result = await userService.findAll(cells);
      res.status(200).send(result);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  async onGetValueOnce(req: Request, res: Response) {
    const { cells } = req.params;
    try {
      const result = await userService.findAllOnce(cells);
      res.status(200).send(result);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  async onGetAllOnceByname(req: Request, res: Response) {
    const { name, cells } = req.params;
    try {
      const result = await userService.findAllOnceByName(cells, name);
      res.status(200).send(result);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  async onGetHistory(req: Request, res: Response) {
    const { cells } = req.params;
    const value: number = !req.query.value ? 0 : Number(req.query.value);
    try {
      const result = await userService.findHistory(cells, value);
      console.log(`Get all ${cells}S history done!`);
      res.status(200).send(result);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  // async onUpdates(req: Request, res: Response) {
  //   const { query } = req;
  //   const { cells } = req.params;
  //   try {
  //     const config = await userService.updateParameter(cells, query);
  //     res.status(200).send(config);
  //     console.log(`Update all ${cells}S parameter done!`);
  //   } catch (error) {
  //     res.status(500).send(error);
  //   }
  // },
  // async onUpdate(req: Request, res: Response) {
  //   const { cells } = req.params;
  //   const { parameter, value } = req.query;
  //   try {
  //     const config = await userService.updateParameterOnce(
  //       parameter,
  //       value,
  //       cells
  //     );
  //     res.status(200).send(config);
  //     console.log(`Update battery ${cells}S, parameter "${parameter}" done!!`);
  //   } catch (error) {
  //     res.status(500).send(error);
  //   }
  // },
  // async onGetUpdates(req: Request, res: Response) {
  //   const { cells } = req.params;
  //   try {
  //     const result = await userService.findUpdated(cells);
  //     res.status(200).send(result);
  //   } catch (error) {
  //     res.status(500).send(error);
  //   }
  // },
};

export default methods;
