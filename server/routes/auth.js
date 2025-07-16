const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
import dotenv from "dotenv";
dotenv.config();
import { Signup, Login } from "../controllers/AuthenticateController";

router.post("/signup", Signup);
router.post("/login", Login);

module.exports = router;
