import * as dotenv from "dotenv";

dotenv.config();

interface ProcessEnv {
  PORT: number;
  MONGO_URI: string;
}

const app: ProcessEnv = {
  PORT: Number(process.env.PORT) || 3001,
  MONGO_URI: String(`mongodb+srv://${process.env.MONGODB_URL_ONLINE}`),
};

export default app;
