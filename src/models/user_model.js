const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    user_name:{
        type: String,
        required: true
    }
});
