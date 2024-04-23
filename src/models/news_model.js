const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: false,
  },
  img: {
    data:Buffer,
    contentType: String,
  },

  content: { type: String, required: false },

  type: { type: String, required: true, default: "local", unique: true },

  created_at: { type: Date, required: true, default: Date.now },
});

const News = mongoose.model("News", newsSchema);
module.exports = News;
