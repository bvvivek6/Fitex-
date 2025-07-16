const express = require("express");
const router = express.Router();
const Workout = require("../models/Workout");
const auth = require("../middleware/auth");

// Log a workout
router.post("/log", auth, async (req, res) => {
  try {
    const { type, reps, calories } = req.body;
    const workout = new Workout({ user: req.user.id, type, reps, calories });
    await workout.save();
    res.status(201).json(workout);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all workouts for user
router.get("/my", auth, async (req, res) => {
  try {
    const workouts = await Workout.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(workouts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
