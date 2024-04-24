const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: false,
  },
  subtitle: {
    type: String,
    required: false,
    default: null,
  },
  img: {
    url: { type: String, required: false, default: null },
    caption: { type: String, required: false, default: null },
    required: false,
    default: null,
  },

  content: { type: String, required: false },

  type: {
    name: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },

    required: true,
  },

  created_at: { type: Date, required: true, default: Date.now },
});

const News = mongoose.model("News", newsSchema);
module.exports = News;
