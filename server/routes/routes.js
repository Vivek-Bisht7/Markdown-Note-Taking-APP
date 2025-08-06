const express = require('express');
const router = express.Router();
const {multerController,formController,notesController} = require('../controllers/controllers');
const upload = require('../middleware/uploadMiddleware');

router.post('/upload' , upload.single('markdownfile') , multerController);
router.post('/form' , formController);
router.get("/notes", notesController);

module.exports = router;