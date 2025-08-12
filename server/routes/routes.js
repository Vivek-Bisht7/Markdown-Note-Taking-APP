const express = require('express');
const router = express.Router();
const {multerController,formController,notesController,getFileData,getHTML} = require('../controllers/controllers');
const upload = require('../middleware/uploadMiddleware');

router.post('/upload' , upload.single('markdownfile') , multerController);
router.post('/form' , formController);
router.get("/notes", notesController);
router.get("/notes/:fileName" , getFileData);
router.get("/notes/HTML/:fileName" , getHTML);

module.exports = router;