const multer = require('multer');


const CreateBlog = async(req,res) =>{
    const {title,blog,author,comments,likes} = req.body;

    const storage = multer.diskStorage({
        destination:(req,res,cb) =>{
            cb(null,'uploads')
        },
        filename:(req,res,cb) =>{
            cb(null,file.originalname)
        }
    }) 
    const upload = multer({storage:storage})

    
} 