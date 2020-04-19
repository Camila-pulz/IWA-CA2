const mongoose = require('mongoose');

//the schema describes how the data looks like
const MediaSchema = mongoose.Schema({
    category:{
        type: String,
        required: true //validation for the field not be empty
    },
    title:{
        type: String,
        required: true //validation for the field not be empty
    },
    genre:{
        type: String,
        required: true //validation for the field not be empty
    },
    year: {
        type: String,
        required: true //validation for the field not be empty
    },
    duration: {
        type: String,
        required: true //validation for the field not be empty
    },
    comments: String,
});

module.exports = mongoose.model('Media', MediaSchema);