const express = require("express");
const mongoose = require("mongoose");
const newsRoutes = require("./src/routes/news_route");
const fileRoutes = require("./src/routes/file_route");
const path = require("path");
const fs = require("fs-extra");

//Swagger
const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "News API",
      version: "1.0.0",
      description: "News API",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: [path.join(__dirname, "./src/public/*js")],
};

const swaggerSpec = swaggerJsDoc(options);

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

// Serve Swagger UI at /api-docs route
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
app.use("/", newsRoutes);
app.use("/file", fileRoutes);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Error handling middleware
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send({ error: "Something went wrong" });
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

const createMediaDirectory = () => {
  const mediaDir = path.join(__dirname, "media");
  const imagesDir = path.join(mediaDir, "images");
  const videosDir = path.join(mediaDir, "videos");

  try {
    // Create the parent directory if it doesn't exist
    if (!fs.existsSync(mediaDir)) {
      fs.mkdirSync(mediaDir, { recursive: true });
    }

    // Create the images directory if it doesn't exist
    if (!fs.existsSync(imagesDir)) {
      fs.mkdirSync(imagesDir);
    }

    // Create the videos directory if it doesn't exist
    if (!fs.existsSync(videosDir)) {
      fs.mkdirSync(videosDir);
    }

    console.log("Media directories created successfully.");
  } catch (err) {
    console.error("Error creating media directories:", err);
  }
};

// Call the function to create the uploads directory
createMediaDirectory();
