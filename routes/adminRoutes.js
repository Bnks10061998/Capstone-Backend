const express = require("express");
const {
  getAllUsersController,
  getAllDoctorsController,
  changeAccountStatusController,
} = require("../controllers/adminCtrl");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

//GET METHOD || USERS
router.get("/getAllUsers",  getAllUsersController);

//GET METHOD || DOCTORS
router.get("/getAllDoctors",  getAllDoctorsController);

//POST ACCOUNT STATUS
router.post(
  "/changeAccountStatus", authMiddleware, changeAccountStatusController
);

module.exports = router;
