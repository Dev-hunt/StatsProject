const express =  require('express');
const router = express.Router();
const mongoose =  require('mongoose');
const User =  mongoose.model('User');
const jwt = require('jsonwebtoken');

require('dotenv').config();

const bcrypt = require('bcrypt');

router.post('/signup',(req,res)=>{
    //res.send('This is signup page');
    console.log('sent by client-',req.body);
    const{ Name, Email_Address, Password, Confirm_Password} = req.body;
    if(!Name || !Email_Address || !Password || !Confirm_Password){
        return res.status(422).json({ error: "please fill all the fields"});
    }
    
    User.findOne({ Email_Address: Email_Address})
        .then(async (savedUser) => {
                if(savedUser){
                    return res.status(422).json({ error: 'Invalid Credentials'});
                }
                const user = new User({
                    Name,
                    Email_Address,
                    Password,
                    Confirm_Password
                })
                
                try{
                    await user.save();
                    const token = jwt.sign({ _id: user._id}, process.env.JWT_SECRET);
                    res.send({token});
                }
                catch(err){
                    console.log(err);
                    return res.status(422).send({error: err.message});
                }
            }
        )         
})

router.post('/signin',async(req, res)=>{
    const {Email_Address, Password} = req.body;
    if(!Email_Address || !Password){
        return res.status(422).json({error: 'please add email or password'});
    }
    const savedUser = await User.findOne({Email_Address:Email_Address})

    if(!savedUser){
        return res.status(422).json({error:"Invalid Credentials"})
    }

    try{
        bcrypt.compare(Password, savedUser.Password, (err,result)=>{
            if(result){
                console.log('Password matched');
                const token  = jwt.sign({ _id:savedUser._id}, process.env.JWT_SECRET);
                res.send({token});
            }
            else{
                console.log('Password does not match');
                return res.status(422).json({error:"Invalid Credential"});
            }
        })
    }
    catch(err){
        console.log(err);
    }
     
})

module.exports = router;