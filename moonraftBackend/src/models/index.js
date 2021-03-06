const mongoose=require("mongoose");

const employeeSchema=new mongoose.Schema({
    firstname:{
        type: String, 
        isUnique: true, 
        isRequired: true

        
    },
    lastname:{
        type: String,  isRequired: true, 
        
    },
    
    email:{
        type: String,  isRequired: true 
        
    },
    password:{
        type: String,  isRequired: true
    }
})

const register=new mongoose.model("Registration",employeeSchema);

module.exports=register;