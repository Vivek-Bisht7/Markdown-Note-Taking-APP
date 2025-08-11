const express = require('express');
const router = express.Router();
const {multerController,formController,notesController,getFileData} = require('../controllers/controllers');
const upload = require('../middleware/uploadMiddleware');

router.post('/upload' , upload.single('markdownfile') , multerController);
router.post('/form' , formController);
router.get("/notes", notesController);
router.get("/notes/:fileName" , getFileData);

module.exports = router;