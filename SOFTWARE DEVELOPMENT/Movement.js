const mongoose = require("mongoose");
const MovementSchema = new mongoose.Schema({
  name : String,
  video : String,
  image : String,
  instructions : String,
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("movement", MovementSchema);
