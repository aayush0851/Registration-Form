const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//creating a new schema
const participantSchema = new Schema({
    name : {
        type: String,
        required: [true, 'This field is required']
    },
    branch
});