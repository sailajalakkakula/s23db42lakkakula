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

// const mongoose = require("mongoose")

// const BallSchema = mongoose.Schema({
//   Ball_Type: String,
//   Ball_Weight: {
//     type: Number,
//     min: [1, 'Weight should be at least 1'],
//     max: [9, 'Weight should not exceed 10']
//   },
//   Ball_Cost: Number,
//   Ball_Value: {
//     type: Number,
//     min: 124,
//     max: 400
//   }
// })

// module.exports = mongoose.model("Ball", BallSchema)
