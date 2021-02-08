const mongoose = require("mongoose");
const requireAdmin = require("../middlewares/requireAdmin");

const Doctor = mongoose.model("doctors");

module.exports = (app) => {
  app.post("/api/fetchdoctor", async (req, res) => {
    const { doctorID } = req.body;

    const doctorFound = await Doctor.findOne({ _id: doctorID });

    res.send(doctorFound);
  })

  app.post("/api/searchdoctor", async (req, res) => {
    const { value } = req.body;

    const doctorsFound = await Doctor.find({
      $text: { $search: value },
    });

    res.send(doctorsFound);
    
  });

  app.get("/api/newdoctor", (req, res) => {
    res.send("hello");
  });

  app.post("/api/newdoctor", requireAdmin, async (req, res) => {
    const {
      name,
      specialty,
      rating,
      description,
      hospital,
      address,
      phone,
    } = req.body;

    const doctor = new Doctor({
      name,
      specialty,
      rating,
      description,
      hospital,
      address,
      phone,
    });

    try {
      await doctor.save();

      res.send(doctor);
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
