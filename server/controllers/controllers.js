const { log } = require('console');
const fs = require('fs');
const path = require('path');

const multerController = (req,res)=>{
    console.log("File recieved : " , req.file);
    return res.send("File received");
}

const formController = async (req,res)=>{
    if (!fs.existsSync(path.join(__dirname, "../public/uploads"))) {
          await fs.mkdir(path.join(__dirname, "../public/uploads"), (err) => {
            if (err) throw err;
          });
        }  
    
    let fileName = req.body.fileName;

    if(!fileName.endsWith('.md')){
        fileName = fileName.split(" ").join("_").trim();
        fileName = fileName + "-" + Math.round(Math.random() * 1e4);
        fileName += ".md";
    }
    else{
        fileName = fileName.split(" ").join("_").trim();
        const fileextension = path.extname(fileName);
        const uniqueSuffix = "-" + Math.round(Math.random() * 1e4);
        fileName = fileName.split(".").slice(0, -1).join(".") + uniqueSuffix + fileextension;
    }

    const filePath = path.join(__dirname , `../public/uploads/${fileName}`);
    const fileData = `${req.body.markdownText}`
    

    fs.appendFile(filePath,fileData,(err)=>{
        if(err) throw err;
        console.log("File created..");
    })
}

module.exports = {multerController,formController};