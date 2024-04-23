const express = require("express");
const router = express.Router();
const fileController = require("../controllers/file_controller");

// Endpoint to upload file
router.post(
  "/upload",
  fileController.uploadFile,
  fileController.getFileReference
);

module.exports = router;
