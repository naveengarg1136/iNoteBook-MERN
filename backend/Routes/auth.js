const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/User')
var jwt = require('jsonwebtoken');
var fetchuser=require('../middleware/fetchuser');
const { body, validationResult } = require('express-validator');

var secrettoken = "dead4vampire"; //jwt random string token

// 1. Create User using Post using (/api/auth/createuser)
router.post('/createuser', [
    // validation array
    body('password', 'password should be atleast 5 chars').isLength({ min: 5 }),
    body('name', 'name ahouls be atleast 3 chars').isLength({ min: 3 }),
    body('email', 'Entera valid email').isEmail(),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    //Check Weather if email already Exist in DB
    try {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ error: "Sorry Email already Exist." })
        }
        //Password hasing + salt using Bcrypt async 
        const salt = await bcrypt.genSalt(10);
        const securePass = await bcrypt.hash(req.body.password, salt);
        user = await User.create({
            name: req.body.name,
            password: securePass,
            email: req.body.email,
        })
        // authtoken using JWT Token
        const data = {
            user: {
                id: user.id
            }
        }
        const authtoken = jwt.sign(data, secrettoken);
        res.json({ authtoken });
    } catch (err) {
        res.status(500).send({ error: "Something is wrong" })
        console.log(err.message);
    }
})


// 2.Login User using Post (/api/auth/login)
router.post('/login', [
    // validation array
    body('password', 'password can not be blank').exists(),
    body('email', 'Entera valid email').isEmail(),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    //Check Weather if email not Exist in DB
    try {
        const {email,password}=req.body;

        let user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(400).json({ error: "Enter valid credentials" })
        }
        //User provided Password should match hash pass present in DB using Bcrypt async 
        const passwordMatched = await bcrypt.compare(password, user.password);
        if(!passwordMatched){
            return res.status(400).json({ error: "Enter valid credentials" })
        }
        
        // authtoken using JWT Token
        const data = {
            user: {
                id: user.id
            }
        }
        const authtoken = jwt.sign(data, secrettoken);
        res.json({ authtoken });
    } catch (err) {
        res.status(500).send({ error: "Internal Server Error" })
        console.log(err.message);
    }
})

// 3.Get UserDetails using Post (/api/auth/getuser) Login Required
router.post('/getuser', fetchuser, async(req,res)=>{
    try {
        const userId= req.user.id;
        let user= await User.findById(userId);
        res.json({user});
        
    } catch (error) {
        res.status(500).send({ error: "Internal Server Error" })
        console.log(err.message);
    }
    
})

module.exports = router