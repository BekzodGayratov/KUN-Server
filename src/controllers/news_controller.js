const News = require("../models/news_model");
const newsTypes = require("../utils/news_types");
const mongoose = require("mongoose");

const newController = {
  getNews: async (req, res, next) => {
    try {
      let query = {};
      if (req.query.type !== undefined) {
        query["type.id"] = req.query.type;
      }

      // If user provides a type parameter, add it to the query
      const news = await News.find(query);

      setTimeout(() => {
        res.status(200).json({
          count: news.length,
          data: news,
        });
      }, 1000);
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
          error: "Title, content, and type fields are not provided",
        });
      }

      if (!newsTypes.newsTypes.map((t) => t.id).some((x) => x === type)) {
        return res.status(400).json({
          error: "type is not specified",
        });
      }

      const newNews = new News({
        title: title,
        subtitle: subtitle,
        content: content,
        type: newsTypes.getNewsTypeById(type),
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
