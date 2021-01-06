const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@hkfiles.rh7e8.mongodb.net/LibraryDb?retryWrites=true&w=majority');
const Schema =mongoose.Schema;

var SignSchema=new Schema({
    name:String,
    email:String,
    password:String,
    phone:Number
});

var sign=mongoose.model('sign',SignSchema);
module.exports = sign;