const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: "./uploads/", // Specify the destination directory
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // Generate unique filename
  },
});

const upload = multer({ storage: storage });
module.exports = upload;
