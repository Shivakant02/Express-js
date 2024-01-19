const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true,
        maxLenght: [30, "Nmae must be lessthan 30 characters"]
    },
    email: {
        type: String,
        required: [true, "email is required"],
        unique:true
    }

    

})

module.exports=mongoose.model("User",userSchema)