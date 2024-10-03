const express = require("express");
const colors = require("colors");
const moragan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");

//dotenv conig
dotenv.config();

//mongodb connection
connectDB();

//rest obejct
const app = express();

//middlewares

//app.use(cors())
app.use(
  cors({
    origin: "https://kaviyab-capstone-ft.netlify.app",
    methods:["GET","POST"]
  })
);
app.use(express.json());
app.use(moragan("dev"));

//routes
app.use("/api/v1/user", require("./routes/userRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));
app.use("/api/v1/doctor", require("./routes/doctorRoutes"));
//Signup and login
app.use("/email", require("./routes/emailRoutes"));
//Chat Application
app.use("/Join", require("./routes/ChatRoutes"));
//Video Application
//app.use("/initCall", require("./routes/VideoRoute"));
//File Attachement
//app.use("/upload", require("./services/FileUploadService"));

//port
const port = process.env.PORT || 8080;
//listen port
app.listen(port, () => {
  console.log(
    `Server Running in ${process.env.NODE_MODE} Mode on port ${process.env.PORT}`
      .bgCyan.white
  );
});
