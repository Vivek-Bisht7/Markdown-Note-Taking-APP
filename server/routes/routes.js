const express = require('express');
const router = express.Router();
const {multerController,formController} = require('../controllers/controllers');
const upload = require('../middleware/uploadMiddleware');

router.post('/upload' , upload.single('markdownfile') , multerController);
router.post('/form' , formController);

module.exports = router;