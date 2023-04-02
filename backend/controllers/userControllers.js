const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

const createUser = asyncHandler(async(req, res) =>{
    const {name, email, password} = req.body

    //check for input details
    if(!name || !email || !password){
        res.status(400)
        throw new Error('Please add details')
    }

    //check using user exists using email property
    const userExists = await User.findOne({email})
    if(userExists){
        res.status(400)
        throw new Error('user exists')
    }

    //hashed password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await User.create({
        name,
        email,
        password : hashedPassword
    })

    if(user){
        res.status(200).json({
            _id:user.id,
            name:user.name,
            email:user.email,
            token:generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Bad data')
    }
})


const loginUser = asyncHandler(async(req, res) =>{
    const {email, password} = req.body

    const user = await User.findOne({email})

    if(user && (await bcrypt.compare(password, user.password))){
        res.status(200).json({
            _id:user.id,
            name:user.name,
            email:user.email,
            token:generateToken(user._id)
        })} else {
        res.status(400)
        throw new Error('Bad data')
    }

})

const generateToken = (id) =>{
    return jwt.sign({id}, process.env.JWT_SECRET,{
        expiresIn:'30d',
    })
    // console.log(token)
}

module.exports = {
    createUser,
    loginUser
}