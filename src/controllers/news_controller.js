const News = require("../models/news_model");

const newController = {
  getNewsByType: async (req, res, next) => {
    try {
      const newsType = req.query.type;
      const news = await News.find({ type: newsType });
      res.status(200).json(news);
    } catch (err) {
      next(err);
    }
  },

  createsNews: async (req, res, next) => {
    try {
      const { title, content,} = req.body;
      const newNews = new News({ title: title, content: content });
      await newNews.save();
      res.status(201).json(newNews);
    } catch (error) {
      next(error);
    }
  },
};

module.exports = newController;
