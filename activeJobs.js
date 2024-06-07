const mongoose = require('mongoose');
const validator = require('validator');

const activeJobSchema = mongoose.Schema(
    {
        jobTitle: {
            type : String,
            trim : true,
            required : true,
        },
        companyID: {
            type : String,
            trim : true,
            required : true,
        },
        noOFRequirements: {
            type : Number,
            required : true,
        },
        startDateOfApplication: {
            type : Date,
            required : true
        },
        lastDateOfApplication: {
            type : Date,
            required : true
        },
        aptitudeTestDate: {
            type : Date,
        },
        technicalTestDate: {
            type : Date,
        },
        hrTestDate: {
            type : Date,
        },
        activeStatus: {
            type : Boolean,
            required : true,
            default : true,
        },
        basicInfo: {
            type : [String]
        }
    }
);

const ActiveJob = mongoose.model('ActiveJob',activeJobSchema);
module.exports = ActiveJob;