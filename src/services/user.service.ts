import Parameter8S from "../models/Parameter8S.model";
import Parameter15S from "../models/Parameter15S.model";
import Update8S from "../models/Updated8S.model";
import Update15S from "../models/Updated15S.model";
import { UpdatedParameter } from "../models/Types";

const parameterModelSelector = (cells: string): any => {
  switch (cells) {
    case "8":
      return Parameter8S;
    case "15":
      return Parameter15S;
    default:
      console.log("Please select valid number of cells.");
      return;
  }
};

const updatedModelSelector = (cells: string): any => {
  switch (cells) {
    case "8":
      return Update8S;
    case "15":
      return Update15S;
    default:
      console.log("Please select valid number of cells.");
      return;
  }
};

const userServices = {
  findAll: (cells: string) => {
    const model: any = parameterModelSelector(cells);
    return model
      ? model.find({}).sort({ _id: -1 })
      : "Please select valid number of cells.";
  },
  findAllOnce: (cells: string) => {
    const model: any = parameterModelSelector(cells);
    return model
      ? model.findOne({}).sort({ _id: -1 })
      : "Please select valid number of cells.";
  },
  findAllOnceByName: (cells: string, name: string) => {
    const model: any = parameterModelSelector(cells);
    return model
      ? model
          .findOne({})
          .select("" + name)
          .sort({ _id: -1 })
      : "Please select valid number of cells.";
  },
  findHistory: (cells: string, value: number) => {
    const model: any = parameterModelSelector(cells);
    return model
      ? model.find({}).sort({ _id: -1 }).limit(value)
      : "Please select valid number of cells.";
  },
  findUpdated(cells: string) {
    const model: any = updatedModelSelector(cells);
    return model
      ? model.findOne({}).sort({ _id: -1 })
      : "Please select valid number of cells.";
  },
  updateParameter(cells: string, query: any) {
    const update: UpdatedParameter = {
      recordtime: new Date().toLocaleString(),
      overtempthreshold: Number(query.otTh),
      undertempthreshold: Number(query.utTh),
      overvoltagethreshold: Number(query.ovTh),
      undervoltagethreshold: Number(query.uvTh),
      overcurrentthreshold: Number(query.ocdTh),
      shortcircuitthreshold: Number(query.scdTh),
    };
    const model: any = updatedModelSelector(cells);
    return model
      ? model.updateOne(update)
      : "Please select valid number of cells.";
  },

  updateParameterOnce(parameters: string, value: number, cells: string) {
    const model: any = updatedModelSelector(cells);
    switch (parameters) {
      case "overtempthreshold":
        return model.updateOne({ overtempthreshold: value });
      case "undertempthreshold":
        return model.updateOne({ undertempthreshold: value });
      case "overvoltagethreshold":
        return model.updateOne({ overvoltagethreshold: value });
      case "undervoltagethreshold":
        return model.updateOne({ undervoltagethreshold: value });
      case "overcurrentthreshold":
        return model.updateOne({ overcurrentthreshold: value });
      case "shortcircuitthreshold":
        return model.updateOne({ shortcircuitthreshold: value });
      default:
        console.log("Please select valid number of cells");
        return;
    }
  },
};

export default userServices;
