const User = require('../models/userModel.js')


exports.home = (req, res) => {
    res.send("<h1>Home Response!</h1>")
}

exports.createUser =async (req, res) => {
    try {
        const { name, email } = req.body
        if (!name || !email) {
            throw new Error('Name and Email are required')
        }
        // check if user is already exist
        const userExists = await User.findOne({ email })
        if (userExists) {
            throw new Error('User already exists')
        }
            const user = await User.create({
                name,
                email
            })
        res.status(201).json({
            success: true,
            message: "User crearted successfully",
            user
        })
        
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message:error.message
        })
    }
}
exports.getUsers = async(req, res) => {
    try {
       const users= await User.find({})
        res.status(200).json({
            success: true,
            users
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message:error.message
        })
    }
}
exports.updateUser =async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({
            success: true,
            message:'User updated successfully'
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message:error.message
        })
    }
}
exports.deleteUser =async (req, res) => {
    try {
        const userId = req.params.id
        const user = await User.findByIdAndDelete(userId)
        res.status(200).json({
            success: true,
            message:'user deleted successfully'
        })
    } catch (error) {
         console.log(error);
        res.status(400).json({
            success: false,
            message:error.message
        })
    }
}