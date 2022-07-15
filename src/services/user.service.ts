import Parameter8S from "../models/Parameter8S.model";
import Parameter15S from "../models/Parameter15S.model";
// import Update8S from "../models/Updated8S.model";
// import Update15S from "../models/Updated15S.model";

const services = {
  findAll(cells: string) {
    return cells === "8"
      ? Parameter8S.find({}).sort({ _id: -1 })
      : cells === "15"
      ? Parameter15S.find({}).sort({ _id: -1 })
      : console.log("Please select valid number of cells");
  },
  findAllOnce(cells: string) {
    return cells === "8"
      ? Parameter8S.findOne({}).sort({ _id: -1 })
      : cells === "15"
      ? Parameter15S.findOne({}).sort({ _id: -1 })
      : console.log("Please select valid number of cells");
  },
  findAllOnceByName(cells: string, name: string) {
    return cells === "8"
      ? Parameter8S.findOne({})
          .select("" + name)
          .sort({ _id: -1 })
      : cells === "15"
      ? Parameter15S.findOne({})
          .select("" + name)
          .sort({ _id: -1 })
      : console.log("Please select valid number of cells");
  },
  findHistory(cells: string, value: number) {
    return cells === "8"
      ? Parameter8S.find({}).sort({ _id: -1 }).limit(value)
      : cells === "15"
      ? Parameter15S.find({}).sort({ _id: -1 }).limit(value)
      : console.log("Please select valid number of cells");
  },
};

export default services;
