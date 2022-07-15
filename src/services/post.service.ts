import Parameter8S from "../models/Parameter8S.model";
import Parameter15S from "../models/Parameter15S.model";
import Update8S from "../models/Updated8S.model";
import Update15S from "../models/Updated15S.model";

const postServices = {
  postParameters(query: any, cells: string) {
    switch (cells) {
      case "8":
        console.log(`Post ${cells} cells parameters`);
        return new Parameter8S({
          recordtime: new Date().toLocaleString(),
          voltage: {
            voltagepack: query.vp,
            voltagecell1: query.v1,
            voltagecell2: query.v2,
            voltagecell3: query.v3,
            voltagecell4: query.v4,
            voltagecell5: query.v5,
            voltagecell6: query.v6,
            voltagecell7: query.v7,
            voltagecell8: query.v8,
          },
          temperature: {
            temperaturecell1: query.temp1,
            temperaturecell2: query.temp2,
          },
          status: {
            shortcircuitdischarge: query.scd,
            overcurrentdischarge: query.ocd,
            overvoltage: query.ov,
            undervoltage: query.uv,
            overtemp: query.ot,
            systemnormal: query.normal,
            chargeflag: query.chargeflag,
            dischargeflag: query.dischargeflag,
          },
          other: {
            currentpack: query.current,
            soc: query.soc,
            soh: query.soh,
          },
        });
      case "15":
        console.log(`Post ${cells} cells parameters`);
        return new Parameter15S({
          recordtime: new Date().toLocaleString(),
          voltage: {
            voltagepack: query.vp,
            voltagecell1: query.v1,
            voltagecell2: query.v2,
            voltagecell3: query.v3,
            voltagecell4: query.v4,
            voltagecell5: query.v5,
            voltagecell6: query.v6,
            voltagecell7: query.v7,
            voltagecell8: query.v8,
            voltagecell9: query.v9,
            voltagecell10: query.v10,
            voltagecell11: query.v11,
            voltagecell12: query.v12,
            voltagecell13: query.v13,
            voltagecell14: query.v14,
            voltagecell15: query.v15,
          },
          temperature: {
            temperaturecell1: query.temp1,
            temperaturecell2: query.temp2,
            temperaturecell3: query.temp3,
          },
          status: {
            shortcircuitdischarge: query.scd,
            overcurrentdischarge: query.ocd,
            overvoltage: query.ov,
            undervoltage: query.uv,
            overtemp: query.ot,
            systemnormal: query.normal,
            chargeflag: query.chargeflag,
            dischargeflag: query.dischargeflag,
          },
          other: {
            currentpack: query.current,
            soc: query.soc,
            soh: query.soh,
          },
        });
      default:
        console.log("Please post valid cells!");
        break;
    }
  },
};

export default postServices;
