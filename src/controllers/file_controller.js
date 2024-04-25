const fileService = require("../service/file_service");

// Controller method to handle file upload
exports.uploadFile = (req, res, next) => {
  fileService.uploadFile(req, res, (err) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    next();
  });
};

// Controller method to return file reference
exports.getFileReference = (req, res) => {
  fileService.getFileReference(req, res);
};
