const multerController = (req,res)=>{
    console.log("File recieved : " , req.file);
    return res.send("File received");
}

module.exports = {multerController};