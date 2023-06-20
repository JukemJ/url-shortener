const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  URLid:{
    type: String,
  },

  longURL:{
    type: String
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Post", PostSchema);
