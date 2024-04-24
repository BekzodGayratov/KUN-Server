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
  },

  created_at: { type: Date, required: true, default: Date.now },
  read_count: { type: Number, required: true, default: 0 },
});

const News = mongoose.model("News", newsSchema);
module.exports = News;
