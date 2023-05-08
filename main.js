require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

// register routes
app.use("/api", require("./routes/api.js"));

const SERVER_PORT = process.env.SERVER_PORT || 5000;

app.listen(SERVER_PORT, () => {
  console.log(`
        Your Application is running on http://127.0.0.1:${SERVER_PORT}
    `);
});
