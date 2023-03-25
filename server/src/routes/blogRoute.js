const express = require('express');
const multer = require('multer');
const jwt = require('jsonwebtoken');
const BlogModel = require("../models/BlogModel");
const fs = require('fs');
const { CreateBlog, UpdateBlog, DeleteBlog } = require('../controllers/blogController');
const router = express.Router();
const upload = multer({ dest: 'uploads/' })

router.post("/addblog",CreateBlog)
router.put("/updateblog/:id",UpdateBlog)
router.delete("/deleteblog/:id",DeleteBlog)
// router.post("/post",upload.single('file'),async(req,res) =>{
//     const {originalPost,path} = req.file;
//     const parts = originalPost.split(".")
//     const ext = parts[parts.length - 1]
//     const newPath = path+ '.' + newPath
//     fs.renameSync(path,newPath)

//     const {token} = req.cookies;
//     jwt.verify(token,process.env.SecretToken,{},async(err,info)=>{
        
//         const {title,blog,author} = req.body;
//         const postDoc = await BlogModel.create({
//             title,
//             blog,
//             author,
//             image:newPath
//         }) 
//         const blogg = await BlogModel.findById(postDoc._id).populate('author',"-password") 
//         await blogg.save()
//         res.json(blogg);
//     })
// })

// router.put("/post",upload.single('file'),async(req,res) =>{
//     let newPath = null;
//     if(req.file){
//         const {originalPost,path} = req.file;
//         const parts = originalPost.split(".")
//         const ext = parts[parts.length - 1]
//         newPath = path + '.'+ext;
//         fs.renameSync(path,newPath)
//     }
//     const {token} = req.cookies;
//     jwt.verify(token,process.env.SecretToken,{},async(err,info)=>{
//         if(err) throw err;
//         const {id,title,blog}  =req.body;
//         const postDoc = await BlogModel.findById(id);
//         const isAuthor = JSON.stringify(postDoc.author) === JSON.stringify(info.id)

//         if(!isAuthor){
//             return res.status(400).json({"message":"Unauthorised person"})
//         }
//         await postDoc.update({
//             title,
//             blog,
//             image:newPath ? newPath : postDoc.image,
//         });
//         res.json(postDoc)
//     })
// })

module.exports = router