const mongoose = require('mongoose')

const cardSchma = new mongoose.Schema({
    cardId: { type: String, unique: true, required: true },
    status: { type: String, required: true },
})

module.exports = mongoose.model("cardStatus", cardSchma)