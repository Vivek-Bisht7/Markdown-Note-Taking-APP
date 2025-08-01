const express = require('express');
const router = express.Router();
const {multerController} = require('../controllers/controllers');

router.post('/upload' , upload.single('markdownfile') , multerController);

module.exports = router;