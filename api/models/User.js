const mongoose = require('mongoose');

//Schema is a class 
const UserSchema = new mongoose.Schema({

    username:{
        type : String,
        required:true,
        unique:true
    },
    email:{
        type : String,
        required:true
    },
    password:{
        type : String,
        required:true
    },
    profilePic:{
        type : String,
        default:"",
    },
    },{timestamps:true}
    );


const User = mongoose.model('User' , UserSchema); // (Collection Name(Capital) , ClassName) 

module.exports = User; 