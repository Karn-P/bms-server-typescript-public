import * as dotenv from "dotenv";

dotenv.config();

interface ProcessEnv {
  PORT: number;
  MONGO_URI: string;
}

const app: ProcessEnv = {
  PORT: Number(process.env.PORT) || 1337,
  MONGO_URI: String(process.env.MONGODB_URL_ONLINE),
};

export default app;
