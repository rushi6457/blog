const express = require('express');
const { Signup } = require('../controllers/userController');
const router = express.Router();

router.post("/signup",Signup)


module.exports = router