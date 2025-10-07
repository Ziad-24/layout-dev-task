import dotenv from "dotenv";
dotenv.config();

export const config = {
  PORT: process.env.PORT || 5000,
  BRAVE_API_KEY: process.env.BRAVE_API_KEY as string,
  GEMINI_API_KEY: process.env.GEMINI_API_KEY as string,
};

if (!config.BRAVE_API_KEY || !config.GEMINI_API_KEY) {
  console.error("❌ Missing required environment variables in .env");
  process.exit(1);
}
