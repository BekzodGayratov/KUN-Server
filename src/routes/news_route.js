const express = require("express");
const router = express.Router();
const newController = require("../controllers/news_controller");


// Get all news
router.get("/news", newController.getNews);

// Create news
router.post("/news", newController.createsNews);

module.exports = router;
