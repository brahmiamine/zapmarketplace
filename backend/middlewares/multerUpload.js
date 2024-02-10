const multer = require("multer");

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueName + "." + file.mimetype.split("/")[1]);
  },
});

const upload = multer({ storage });

module.exports = upload;
