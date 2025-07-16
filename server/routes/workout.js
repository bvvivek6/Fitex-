const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const {
  Logwork,
  GetMyWorks,
  UpdateWorkOut,
} = require("../controllers/WorkOutController");

router.post("/log", auth, Logwork);
router.get("/me", auth, GetMyWorks);
router.post("/update", auth, UpdateWorkOut);

module.exports = router;
