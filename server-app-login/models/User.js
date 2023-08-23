const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
 
const userSchema = new mongoose.Schema({
    Name:{
        type: String,
        required: true
    },
    Email_Address:{
        type: String,
        requried: true,
        unique: true,
    },
    Password:{
        type: String,
        required: true
    },
    Confirm_Password:{
        type:String,
        required:true
    },
})

userSchema.pre('save', async function (next){
    const user = this;
    console.log('Just before saving and before hashing', user.Password);
    if(!user.isModified('Password')){
        return next();
    }
    user.Password = await bcrypt.hash(user.Password, 8);
    console.log('just before saving and after hashing', user.Password);
    next();
})

mongoose.model("User",userSchema);