const mongoose = require('mongoose'); 

console.log("Hii from person.js");
const personSchema=new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    id:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    designation:{
        type: String,  
        enum:["Student","Professor","Others"],      
        required: true
    }

});
const Person=mongoose.model("Person",personSchema);
module.exports = Person;
