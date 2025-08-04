const multerController = (req,res)=>{
    console.log("File recieved : " , req.file);
    return res.send("File received");
}

const formController = (req,res)=>{
    console.log(req.body.fileName);
    
}

module.exports = {multerController,formController};