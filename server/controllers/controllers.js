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
        return res.status(200).json({message:"Created"});
    })
}

const notesController = async (req,res)=>{
    const location = path.join(__dirname , "../public/uploads");

    await fs.readdir(location , (err,files)=>{
        res.send(files);
    })
}

const getFileData = async (req,res)=>{
    const fileName = req.params.fileName;
    
    const filePath = path.join(__dirname , `../public/uploads/${fileName}`);

    fs.access(filePath , fs.constants.F_OK , (err)=>{
        if(err){
            console.log(err);    
        }
        else{
            fs.readFile(filePath , 'utf-8' , (err,data)=>{
                if(err) throw err;
                else res.send({fileData : data});
            })
        }
    })
    
}

module.exports = {multerController,formController,notesController,getFileData};