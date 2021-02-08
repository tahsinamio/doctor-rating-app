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

    // const evals = await Review.countDocuments({ _doctor: id });
    // const rating = await Doctor.findById(id).rating;
    // const newRating = (rating * (evals) + review.stars) / evals + 1;
    // const newDoc = await Doctor.findByIdAndUpdate(id, {
    //   rating: newRating,
    //   evals: evals,
    // });

    const newDoc = await Doctor.findByIdAndUpdate(id, { $inc: { evals: 1, rating: stars } });

    try {
      await newDoc.save();
      await review.save();     

      res.send(req.body);
    } catch (err) {
      res.status(422).send(err);
    }

    

    // const evals = await Review.countDocuments({ _doctor: id })
    // const rating = await Review
    // const reviews = await Review.find({ _doctor: id }, "stars")
    // const evals = reviews.length
    // const ratings = reviews.map(a => a.stars)
    // const newRating = ratings.reduce((a, b) => a + b) / evals
    // const newDoc = await Doctor.findOneAndUpdate(
    //     id,
    //     { $set: { rating: newRating, evals: evals } },
    //     { new: true }
    //   );

    try {
      await newDoc.save();

      res.send(req.body);
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
