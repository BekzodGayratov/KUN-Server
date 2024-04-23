const express = require("express");
const router = express.Router();
const newController = require("../controllers/news_controller");

// Get news by type
router.get("/news", newController.getNewsByType);

// Create news
router.post("/news", newController.createsNews);


module.exports = router;