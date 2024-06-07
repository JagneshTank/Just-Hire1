const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
    },
    companyName: {
        type: String,
        trim: true,
    },
    lastName: {
        type: String,
        trim: true,
    },
    email:{
        required: true,
        type: String,
        trim: true,
        validate: {
            validator: (value) => {
                if(!validator.isEmail(value)){
                    throw new Error("Email is Invalid");
                }
            }
        }
    },
    password: {
        required: true,
        type: String,
        validate: {
            validator: (value) => {
                  return value.length>6;
            },
             massage: 'Please enter a valid email Address',
        },

    },
    userType: {
        type: String,
        enum: ['recruiter','candidate'],
        required: true
    },
});

const User = mongoose.model('user',userSchema);
module.exports = User;