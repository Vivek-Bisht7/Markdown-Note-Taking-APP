const multer = require("multer");
const path = require("path");
const fs = require("fs");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (!fs.existsSync(path.join(__dirname, "../public/uploads"))) {
      fs.mkdir(path.join(__dirname, "../public/uploads"), (err) => {
        if (err) throw err;
      });
    }  

    cb(null, path.join(__dirname, "../public/uploads"));
  },
  filename: function (req, file, cb) {
    const fileextension = path.extname(file.originalname);
    const uniqueSuffix = "-" + Math.round(Math.random() * 1e4);
    cb(
      null,
      file.originalname.split(".").slice(0, -1).join(".") +
        uniqueSuffix +
        fileextension
    );
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
