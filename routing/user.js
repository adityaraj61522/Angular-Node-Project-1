const express = require("express");
const router = express.Router();

const registerUser = require("../function/registerUser");
const homeDetails = require("../function/homeDetails");
const loginUser = require("../function/loginUser");
const uploadImg = require("../function/upload");
const updateDetails = require("../function/update")

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get(`/home/ID::id`, homeDetails);
router.post(`/update/ID::id`, updateDetails);

const multer = require("multer");

const DIR = "./uploads";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(" ").join("-");
    console.log(fileName);
    cb(null, "abc" + "-" + fileName);
  },
});

var upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
    }
  },
});

router.post(
    `/upload/ID::id`,
    upload.single("image"),
    uploadImg
  );

module.exports = router;