var mongoose = require("mongoose");

var playersSchema = new mongoose.Schema({
  Name: {
    type: String,
  },
  Country: {
    type: String,
  },
  Runs: {
    type: Number,
  },
  Avg: {
    type: Number,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

const Players = mongoose.model("Players", playersSchema);
module.exports = Players;
