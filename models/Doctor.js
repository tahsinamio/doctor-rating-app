const mongoose = require("mongoose");
const { Schema } = mongoose;

const doctorSchema = new Schema({
  name: String,
  specialty: String,
  description: String,
  hospital: String,
  address: String,
  phone: String,
  rating: { type: Number, default: 0 },
  evals: { type: Number, default: 0 },
});

doctorSchema.index({ name: "text" });

mongoose.model("doctors", doctorSchema);
