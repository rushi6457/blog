const express = require('express');
const { CreateBlog, DeleteBlog } = require('../controllers/blogController');
const router = express.Router();

router.post("/newblog",CreateBlog)
router.delete("/deleteblog",DeleteBlog)

module.exports = router