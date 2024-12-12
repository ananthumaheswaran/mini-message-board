import express from "express"; // Import express
import dotenv from "dotenv"; // Import dotenv to load environment variables
import path from "path"; // Import path for handling file paths
import router from "./routes/routes.js"; // Import routes

// Initialize app and configure environment variables
const app = express();
dotenv.config();

// Configure the app
app.set("views", path.join(__dirname, "views")); // Set views directory
app.set("view engine", "ejs"); // Set EJS as the view engine

// Use routes
app.use("/", router);

export default app;
