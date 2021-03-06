
const catcAsync = require('express-async-handler')
const User = require('../model/userModel')
const generateToken = require('../utils/generateToken');


const authUser = catcAsync(async (req, res) => {
    // parse data from req body
    const { email, password } = req.body;

    // find user if it exist in database 

    const user = await User.findOne({ email })

    if (user && (await user.matchPassword(password))) {
        console.log('user exist in database')
        return res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })
    } else {
        res.status(401);
        throw new Error('invalid Email or Password')
    }

})

//des get User Profile
// rout get/api/user/profile
// access private
const getUserProfile = catcAsync(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
        res.json(user);
    } else {
        res.status(404);
        throw new Error('User belong to tis token is no longer exist')
    }
})

const reisterUser = catcAsync(async (req, res) => {
    const { name, email, password } = req.body;
    const userExist = await User.findOne({ email });
    if (userExist) {
        res.status(400);
        throw new Error('user already exist')
    }
    const user = await User.create({
        name,
        email,
        password
    });
    if (user) {
        res.status(201);
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user.id)
        })
    } else {
        res.status(400)
        throw new Error('invalid user data')
    }
})




const admins = catcAsync(async (req, res) => {
    // parse data from req body
    const { email, password } = req.body;

    // find user if it exist in database 

    const user = await User.findOne({ email })

    if (user && (await user.matchPassword(password) && user.isAdmin === true)) {
        return res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)

        })
    } else {
        res.status(401);
        throw new Error('Not authorized user as admin or invalid Email or Password')
    }

})

const alluser = catcAsync(async (req, res) => {
    let list = await User.find({});
    res.json(list);
})

module.exports = { admins, reisterUser, getUserProfile, authUser, alluser }