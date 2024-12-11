import app from "./app.js"; // Import the app from app.js

const PORT = process.env.PORT || 3000; //use PORT from .env or default to 3000

// Start the server
app.listen(PORT, () => {
  console.log(`Server is runnning at http://localhost:${PORT}`);
});
