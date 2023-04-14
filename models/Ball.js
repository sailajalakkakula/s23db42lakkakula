const mongoose = require("mongoose")
const BallSchema = mongoose.Schema({
    Ball_Type: String,
Ball_Weight: Number,
Ball_Cost: Number
})
module.exports = mongoose.model("Ball",
BallSchema)