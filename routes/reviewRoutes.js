const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");

const Review = mongoose.model("reviews");
const Doctor = mongoose.model("doctors");

module.exports = (app) => {
  app.post("/api/fetchreviews", async (req, res) => {
    const { doctorID } = req.body;

    const reviewsFound = await Review.find({ _doctor: doctorID });

    res.send(reviewsFound);
  });

  app.post("/api/postreview", requireLogin, async (req, res) => {
    const { id, reviewbody, stars } = req.body;

    const review = new Review({
      body: reviewbody,
      stars: stars,
      _user: req.user.id,
      _displayName: req.user.displayName,
      _doctor: id,
      dateSent: Date.now(),
    });

    const newDoc = await Doctor.findByIdAndUpdate(id, { $inc: { evals: 1, rating: stars } });

    try {
      await newDoc.save();
      await review.save();     

      res.send(req.body);
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
