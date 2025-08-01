const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname , '../public/uploads'));
  },
  filename: function (req, file, cb) {
    const fileextension = path.extname(file.originalname);
    const uniqueSuffix = '-' + Math.round(Math.random() * 1E4)
    cb(null, file.fieldname + '-' + uniqueSuffix + fileextension)
  }
})

const upload = multer({ storage: storage })

module.exports = upload;