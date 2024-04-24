const express = require("express");
const mongoose = require("mongoose");
const newsRoutes = require("./src/routes/news_route");
const fileRoutes = require("./src/routes/file_route");
const path = require("path");
const fs = require("fs-extra");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

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

// Routes
app.use("/", newsRoutes);
app.use("/file", fileRoutes);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Error handling middleware
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send("Something went wrong!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});

const db = mongoose.connection;
async function clearDatabase() {
  try {
    // Get list of all collection names
    const collections = await db.listCollections();

    // Iterate over each collection and drop it
    for (const collection of collections) {
      await db.collection(collection.name).drop();
      console.log(`Dropped collection: ${collection.name}`);
    }

    console.log("All collections dropped successfully");
  } catch (error) {
    console.error("Error dropping collections:", error);
  } finally {
    // Close the connection after dropping collections
    await mongoose.connection.close();
    console.log("MongoDB connection closed");
  }
}
// clearDatabase();

const createUploadsDirectory = () => {
  const uploadsDir = path.join(__dirname, "uploads");
  if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir);
    console.log("Uploads directory created:", uploadsDir);
  } else {
    console.log("Uploads directory already exists:", uploadsDir);
  }
};

// Call the function to create the uploads directory
createUploadsDirectory();
