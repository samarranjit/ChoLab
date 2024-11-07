const express = require("express");
const cors = require("cors");
const dbConfig = require("./config/dbConfig");

const app = express();
const Data = require("./routes/AllRoutes");

app.use(cors());
app.use(express.json());
app.use("/api", Data);

require("dotenv").config();

// Check if the file is run directly or required by another module
if (require.main === module) {
  // This runs only when executing `node server.js` (for local development)
  const port = process.env.PORT || 8081;
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

// Export the app for serverless function (Vercel)
module.exports = app;
