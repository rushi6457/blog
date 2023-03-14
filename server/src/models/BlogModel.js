const mongoose  = require('mongoose')

const BlogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },
    blog:{
        type:String,
        required:true,
        trim:true
    },
    image:{
        type:String
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    comments:{
        type:String
    },
    likes:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    }
},{
    timestamps:true
})