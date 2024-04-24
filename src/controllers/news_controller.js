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
      const { title, content, subtitle, type } = req.body;

      let img = req.body.img ? req.body.img : null;

      if (!title || !type) {
        return res.status(400).json({
          message: "Title, content, and type fields are not provided",
        });
      }
      const newNews = new News({
        title: title,
        subtitle: subtitle,
        content: content,
        type: type,
        img: {
          url: img ? img.url : null,
          caption: img ? img.caption : null,
        },
      });
      await newNews.save();
      res.status(201).json(newNews);
    } catch (error) {
      next(error);
    }
  },
};

module.exports = newController;
