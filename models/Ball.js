const mongoose = require("mongoose")

const BallSchema = mongoose.Schema({
  Ball_Type: String,
  Ball_Weight: Number,
  Ball_Cost: Number,
  Ball_Value: {
    type: Number,
    min: [100, "The minimum value for Ball_Value is 124."],
    max: [400, "The maximum value for Ball_Value is 400."]
  }
})

module.exports = mongoose.model("Ball", BallSchema)

