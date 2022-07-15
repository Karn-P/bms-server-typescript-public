import { model, Schema } from "mongoose";
import { UpdatedParameter } from "./Types";

const clientUpdate8Schema = new Schema<UpdatedParameter>(
  {
    recordtime: { type: String, required: true },
    overtempthreshold: { type: Number, required: true },
    undertempthreshold: { type: Number, required: true },
    overvoltagethreshold: { type: Number, required: true },
    undervoltagethreshold: { type: Number, required: true },
    overcurrentthreshold: { type: Number, required: true },
    shortcircuitthreshold: { type: Number, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const clientUpdate8 = model<UpdatedParameter>("update_8", clientUpdate8Schema);

export default clientUpdate8;
