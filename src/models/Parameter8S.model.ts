import { model, Schema } from "mongoose";

interface IUser8cells {
  recordtime: string;
  voltage: object;
  voltagepack: number;
  voltagecell1: number;
  voltagecell2: number;
  voltagecell3: number;
  voltagecell4: number;
  voltagecell5: number;
  voltagecell6: number;
  voltagecell7: number;
  voltagecell8: number;
  temperature: object;
  temperaturecell1: number;
  temperaturecell2: number;
  status: object;
  systemnormal: number;
  overcurrentdischarge: number;
  shortcircuitdischarge: number;
  overtemp: number;
  overvoltage: number;
  undervoltage: number;
  chargeflag: number;
  dischargeflag: number;
  other: object;
  currentpack: number;
  soc: number;
  soh: number;
}

const user8cellSchema = new Schema<IUser8cells>(
  {
    recordtime: { type: String, required: true },
    voltage: {
      voltagepack: { type: Number, required: true },
      voltagecell1: { type: Number, required: true },
      voltagecell2: { type: Number, required: true },
      voltagecell3: { type: Number, required: true },
      voltagecell4: { type: Number, required: true },
      voltagecell5: { type: Number, required: true },
      voltagecell6: { type: Number, required: true },
      voltagecell7: { type: Number, required: true },
      voltagecell8: { type: Number, required: true },
    },
    temperature: {
      temperaturecell1: { type: Number, required: true },
      temperaturecell2: { type: Number, required: true },
    },
    status: {
      systemnormal: { type: Number, required: true },
      overcurrentdischarge: { type: Number, required: true },
      shortcircuitdischarge: { type: Number, required: true },
      overtemp: { type: Number, required: true },
      overvoltage: { type: Number, required: true },
      undervoltage: { type: Number, required: true },
      chargeflag: { type: Number, required: true },
      dischargeflag: { type: Number, required: true },
    },
    other: {
      currentpack: { type: Number, required: true },
      soc: { type: Number, required: true },
      soh: { type: Number, required: true },
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const user_8Cell = model<IUser8cells>("user_8", user8cellSchema);

export default user_8Cell;
