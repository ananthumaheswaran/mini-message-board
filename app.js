import express from "express"; // Import express
import dotenv from "dotenv"; // Import dotenv to load environment variables
import router from "./routes/routes.js";
const app = express(); // Creates an Express app instance
dotenv.config(); // Load environment variables from .env file

// Define the routes
app.use("/", router); // Use the routes defined in route.js

export default app;
