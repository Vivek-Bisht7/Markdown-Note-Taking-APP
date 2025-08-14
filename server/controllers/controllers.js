const fs = require('fs');
const path = require('path');
const markdownit = require('markdown-it');
const spell = require('spell-checker-js');
const constants = require('constants');


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

    fs.access(filePath, constants.F_OK, (err) => {

        if(err){
            console.log("File does not exists");
        }
        else{
            fs.readFile(filePath , 'utf-8' , (err,data)=>{
                if(err) throw err.message;
                else res.send({fileData : data});
            })
        }
    });
}


const getHTML = (req,res) => {
    const md = markdownit();

    const fileName = req.params.fileName;

    const filePath = path.join(__dirname , `../public/uploads/${fileName}`);

    fs.access(filePath, constants.F_OK, (err) => {

        if(err){
            console.log("File does not exists");
        }
        else{
            fs.readFile(filePath , 'utf-8' , (err,data)=>{
                if(err){
                throw err;
            }
            else{
                const result = md.render(data);
                res.send(result);
            }
        })
        }
    });

}

const  getGrammarErrors = (req,res) => {
    const fileName = req.params.fileName;
    const filePath = path.join(__dirname , `../public/uploads/${fileName}`)

    fs.access(filePath, constants.F_OK, (err) => {

        if(err){
            console.log("File does not exists");
        }
        else{
            fs.readFile(filePath , 'utf-8' , (err,data)=>{
                if(err){ 
                console.log(err);
                throw err;
            }
            else{
                spell.load('en');
                const check = spell.check(data);
            res.send(check);
        }
    })
        }
    });

}

module.exports = {multerController,formController,notesController,getFileData,getHTML,getGrammarErrors};