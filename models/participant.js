const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//creating a new schema
const participantSchema = new Schema({
    name : {
        type : String,
        required: [true, 'This field is required']
    },
    branch : {
        type : String,
        enum : ['CS', 'IT', 'ECE', 'EN', 'EI', 'ME', 'CE'],
        required : [true, 'This field is required']
    },
    year : {
        type : String,
        enum : ['1', '2', '3', '4'],
        required : [true, 'This field is required']
    },
    email : {
        type : String,
        unique : true,
        match : /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
        required : [true, 'This field is required']  
    },
    mobileNumber : {
        type : Number,
        unique : true,
        required : [true, 'This field is required'] 
    },
    rollNumber : {
        type : Number,
        unique : true,
        required : [true, 'This field is required'] 
    },
    userName : {
        type : String,
        unique : true,
        required : [true, 'This field is required'] 
    },
    residency : {
        type : String,
        enum : ['Hostler', 'Day Scholar'],
        required : [true, 'This field is required'] 
    }
});

const Participant = mongoose.model('participant', participantSchema);

module.exports = Participant;