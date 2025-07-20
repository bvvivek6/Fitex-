const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
import Workout from "../models/Workout";
import dotenv from "dotenv";

export const Logwork = async (req, res) => {
  try {
    const { type, reps, calories } = req.body;
    const workout = new Workout({ user: req.user.id, type, reps, calories });
    await workout.save();
    res.status(201).json(workout);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const GetMyWorks = async (req, res) => {
  try {
    const workouts = await Workout.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(workouts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const UpdateWorkOut = async (req, res) => {
  const { id, type, reps, calories } = req.body;

  try {
    const workout = await Workout.findById(id);
    if (!workout) {
      return res.status(404).json({ message: "Workout not found" });
    }

    // Only update if new reps and calories are greater than current
    if (
      (typeof reps === "number" && reps > workout.reps) ||
      (typeof calories === "number" && calories > workout.calories)
    ) {
      const updatedFields = {
        type: type || workout.type,
        reps:
          typeof reps === "number" && reps > workout.reps ? reps : workout.reps,
        calories:
          typeof calories === "number" && calories > workout.calories
            ? calories
            : workout.calories,
      };
      const updatedWork = await Workout.findByIdAndUpdate(id, updatedFields, {
        new: true,
        runValidators: true,
      });
      return res
        .status(200)
        .json(updatedWork, { message: "Workout Updated! Keep Going!🫡" });
    } else {
      return res
        .status(200)
        .json(workout, { message: "Work harder to get update results!😉" });
    }
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
