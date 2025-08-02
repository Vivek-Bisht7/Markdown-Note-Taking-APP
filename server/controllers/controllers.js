const multerController = (req,res,next)=>{
    console.log("File recieved : " , req.file);
    next();
}

module.exports = {multerController};