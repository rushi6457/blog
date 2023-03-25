const multer = require('multer');
const BlogModel = require('../models/BlogModel');
const UserModel = require('../models/userModel');
const upload = multer({ dest: 'uploads/' })
const jwt = require("jsonwebtoken");

const CreateBlog = async(req,res) =>{

    const {title,blog,author} = req.body;
    const {token} = req.cookies;
    let a = jwt.verify(token,process.env.SecretToken,{})
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
    try {
        const deleteBlog = await BlogModel.findByIdAndDelete({_id:id})
        const {token} = req.cookies;
        jwt.verify(token,process.env.SecretToken,{},async() =>{

            if(token){
                res.status(200).send({"message":"Blog deleted successfully"})
            }
            else{
                res.status(400).send({"message":"Blog not found"})
            } 
        })
    } catch (error) {
        
    }
}

const UpdateBlog = async(req,res) =>{
     const {id} = req.params;
    const {token} = req.cookies;
    let user = jwt.decode(token)
    console.log(user.id)
    const blogs = await BlogModel.findById({_id:id})
    console.log(blogs);

    if(user.id === blogs.author){
       const blogs = await BlogModel.findByIdAndUpdate({_id:id})

    }
    else{
       res.status(400).send({"message":"Unathorised person"})
    }
//   jwt.verify(token, process.env.SecretToken, {}, async (err,info) => {
//     if (err) throw err;
//     co.authornst {title,blog} = req.body;
//     const postDoc = await BlogModel.findById({_id:id});
//     console.log(postDoc)
//     const isAuthor = (postDoc.author === info.id);
//     if (!isAuthor) {
//       return res.status(400).send('you are not the author');
//     }
//     await postDoc.update({
//       title,
//       blog,
//     });

//     res.send(postDoc);
//   });


    // const {id} = req.params;
    // const {userId} = req.params;
    // // const {token} = req.cookies;
    // const blogs = await BlogModel.findById({_id:id}).populate("author").select("-password")
    // const user = await UserModel.findById({_id:userId})
    // console.log(blogs._id);
   
}
module.exports = {
    CreateBlog,
    DeleteBlog,
    UpdateBlog
}