const mongoose = require('mongoose');

//Schema is a class 
const CategorySchema = new mongoose.Schema(
    {  
    name:{
        type : String,
        required:true
    },
     },
        {timestamps:true}
    );


const Category = mongoose.model('Category' , CategorySchema); // (Collection Name(Capital) , ClassName) 

module.exports = Category; 