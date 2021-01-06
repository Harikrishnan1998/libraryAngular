const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@hkfiles.rh7e8.mongodb.net/LibraryDb?retryWrites=true&w=majority');
const Schema =mongoose.Schema;

var NewUserSchema=new Schema({
    username:String,
    password:Number
});

var user=mongoose.model('user',NewUserSchema);
module.exports = user;