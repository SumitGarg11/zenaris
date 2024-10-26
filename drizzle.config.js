import { defineConfig } from "drizzle-kit";
export default defineConfig({
 
  schema: "./configs/schema.js",
  dialect: "postgresql",
  dbCredentials:{
    url : 'postgresql://ai%20mock%20interview_owner:Ou6WhkLlURE1@ep-bitter-sun-a5x45kay.us-east-2.aws.neon.tech/AI-Course-Generator?sslmode=require'
  }
});