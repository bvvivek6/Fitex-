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
    const upadatedWork = await Workout.findByIdAndUpdate(
      id,
      {
        type,
        reps,
        calories,
      },
      { new: true, runValidators: true }
    );
    if (!upadatedWork) {
      return res.status(404).json({ message: "Workout not found" });
    }
    //success
    res.status(200).json(upadatedWork);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
