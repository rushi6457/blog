const multer = require('multer');
const BlogModel = require('../models/BlogModel');
const UserModel = require('../models/userModel');
const upload = multer({ dest: 'uploads/' })

const CreateBlog = async(req,res) =>{
    
    const {title,blog,author} = req.body;

    const newBlog = await BlogModel.create({
        title,
        blog,
        author
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