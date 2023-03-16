const multer = require('multer');
const BlogModel = require('../models/BlogModel');
const UserModel = require('../models/userModel');


const CreateBlog = async(req,res) =>{
    const {title,blog,author} = req.body;

    // const storage = multer.diskStorage({
    //     destination:(req,res,cb) =>{
    //         cb(null,'uploads')
    //     },
    //     filename:(req,res,cb) =>{
    //         cb(null,file.originalname)
    //     }
    // }) 
    // const upload = multer({storage:storage})

    const newBlog = await BlogModel.create({
        title,
        blog,
        author,
        // comments,
        // likes
    })
    const blogg = await BlogModel.findById(newBlog._id).populate('author',"-password") 
    await blogg.save()
    res.send(blogg)
    
} 

const DeleteBlog = async(req,res) =>{
    const {id} = req.params;
    const deleteBlog = await BlogModel.findByIdAndDelete({_id:id})
    if(deleteBlog){
        res.status(200).send({"message":"Blog deleted successfully"})
    }
    else{
        res.status(400).send({"message":"Blog not found"})
    }
    
}

const UpdateBlog = async(req,res) =>{
    const {id} = req.params;
    const update = await BlogModel.findByIdAndUpdate({_id:id})
    const user = await UserModel.findById({_id:req.params})
    if(update){
        res.status(200).send({"message":"Blog updated successfully"})
    }
}
module.exports = {
    CreateBlog,
    DeleteBlog
}