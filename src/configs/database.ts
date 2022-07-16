import { connect } from "mongoose";
import config from "../configs/app";

const database = {
  mongoDB() {
    return connect(config.MONGO_URI, (error) => {
      if (error) console.error("MongoDB error: ", error);
      console.log("MongoDB connected successfully");
    });
  },
};

export default database;
