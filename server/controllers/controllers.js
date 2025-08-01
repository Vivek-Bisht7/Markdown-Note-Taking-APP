const multerController = (req,res,next)=>{
    console.log(req.file);
    next();
}

module.exports = {multerController};