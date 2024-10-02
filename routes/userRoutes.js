const express = require("express");
const {
  loginController,
  registerController,
  authController,
  applyDoctorController,
  getAllNotificationController,
  deleteAllNotificationController,
  getAllDocotrsController,
  bookeAppointmnetController,
  bookingAvailabilityController,
  userAppointmentsController,
  applyPatientController
} = require("../controllers/userCtrl");
const authMiddleware = require("../middlewares/authMiddleware");

//router onject
const router = express.Router();

//routes
//LOGIN || POST
router.post("/login", loginController);

//REGISTER || POST
router.post("/register", registerController);

//Auth || POST
router.post("/getUserData", authMiddleware, authController);

//APply Doctor || POST
router.post("/apply-doctor", authMiddleware, applyDoctorController);

//Apply Patient Info
router.post("/PatientInfo", authMiddleware, applyPatientController);

//Notifiaction  Doctor || POST
router.post(
  "/get-all-notification",authMiddleware,
  getAllNotificationController
);
//Notifiaction  Doctor || POST
router.post(
  "/delete-all-notification",
  authMiddleware,
  deleteAllNotificationController
);

//GET ALL DOC
router.get("/getAllDoctors",getAllDocotrsController);

//BOOK APPOINTMENT
router.post("/book-appointment",authMiddleware, bookeAppointmnetController);

 //Booking Avliability
router.post(
  "/booking-availbility",authMiddleware,bookingAvailabilityController
);

//Appointments List
router.get("/user-appointments",  userAppointmentsController);//working

module.exports = router;
