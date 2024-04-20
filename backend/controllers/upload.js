const multer = require("multer");
const path = require("path");
const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: "picture",
});

const upload = multer({ storage: storage });
module.exports = upload;
