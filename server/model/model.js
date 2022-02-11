const { Number } = require('mongoose');
const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    phone:{
        type:Number,
        required:true,
     unique:true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;