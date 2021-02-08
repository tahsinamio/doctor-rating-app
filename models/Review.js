const mongoose = require("mongoose");
const { Schema } = mongoose;

const reviewSchema = new Schema({
  stars: { type: Number, default: 0 },
  body: String,
  dateSent: Date,
  _user: { type: Schema.Types.ObjectId, ref: "User" },
  _displayName: { type: String, ref: "User" },
  _doctor: { type: Schema.Types.ObjectId, ref: "Doctor" },
});

mongoose.model("reviews", reviewSchema);
