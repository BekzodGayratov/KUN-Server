const multer = require("multer");
const path = require("path");


// Set up storage for multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Save files to the uploads folder
  },
  filename: function (req, file, cb) {
    // Generate a unique filename for the uploaded image
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

// Initialize multer middleware
const upload = multer({ storage: storage });

// Service method to handle file upload
exports.uploadFile = upload.single("file");

// Service method to return file reference
exports.getFileReference = (req, res) => {
  try {
    if (!req.file || !req.file.mimetype.startsWith("image/")) {
      return res.status(400).json({ error: "No valid image uploaded" });
    }
    const filename = req.file.filename;
    const fileReference = "/uploads/" + filename; // Adjust as needed based on your server setup
    res.status(200).json({ id: fileReference });
  } catch (error) {
    console.error("Error uploading file:", error);
    res.status(500).json({ error: "Failed to upload file" });
  }
};
