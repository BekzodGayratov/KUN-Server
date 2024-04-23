const express = require("express");
const mongoose = require("mongoose");
const newsRoutes = require("./src/routes/news_route");

const app = express();

const PORT = 3000;

// Connect mongodb

mongoose
  .connect("mongodb://127.0.0.1:27017/news")
  .then(() => {
    console.log("Connected to mongodb");
  })
  .catch((err) => {
    console.log("Error connecting to mongodb:", err);
    process.exit(1);
  });

// Middleware
app.use(express.json());

// Routes
app.use("/", newsRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send("Something went wrong!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
