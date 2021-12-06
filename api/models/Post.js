const mongoose = require('mongoose');

//Schema is a class 
const PostSchema = new mongoose.Schema({

    title:{
        type : String,
        required:true,
        unique:true
    },
    desc:{
        type : String,
        required:true
    },
    photo:{
        type : String,
        required:false
    },
    username:{
        type : String,
        required:true
    },
    categories:{
        type:Array,
        required:false
    },
     },
        {timestamps:true}
    );


const Post = mongoose.model('Post' , PostSchema); // (Collection Name(Capital) , ClassName) 

module.exports = Post; 