const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    cardId: { type: String, required: true },
    phoneNumber: { type: String, unique: true, required: true },
});


module.exports = mongoose.model('User', userSchema);