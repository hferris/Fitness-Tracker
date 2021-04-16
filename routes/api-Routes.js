const router = require("express").Router();
const { Workout } = require("../models");

router.get("/api/workouts", async (req, res) => {
  try {
    const info = await Workout.find();
    res.json(info);
  } catch (error) {
    console.log(error);
  }
});

router.put("/api/workouts/:id", async (req, res) => {
  try {
    const info = await Workout.updateById(
      { _id: req.params.id },
      { $push: { exercises: req.body } }
    );
    res.json(info);
  } catch (error) {
    console.log(error);
  }
});

router.post("/api/workouts", async (req, res) => {
  Workout.create(req.body)
    .then((info) => {
      res.json(info);
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get("/api/workouts/range", async (req, res) => {
  try {
    const info = await Workout.find();
    res.json(info);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;