import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: [true, 'Name is required'],
        maxLength:[50,'Name should be less than 50 characters']
    },
    email:{
        type: String,
        unique:true
    },
    username: {
        type: String,
        unique:true
    },
    password: {
        type:String
    },
    size:String
});

export default mongoose.model("User", userSchema)
