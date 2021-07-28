const express = require("express");
const multer = require("multer");
const cors = require("cors");

const api = require("./routes/index");
const app = express();

//  FileUpload
// multer-optional
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});
var upload = multer({ storage: storage }).single("profile_img");

app.use(cors());
app.use("/api", api);

const port = 3002;
app.listen(port, () => {
  console.log(`express is running on ${port}`);
});
