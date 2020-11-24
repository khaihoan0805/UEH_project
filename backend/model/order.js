const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, require: true },
    phone: { type: String, require: true },
    email: {type: String, require: true },
    type: { type: String, require: true },
    quantity: { type: Number, default: 1 },
    comment: { type: String }
})

module.exports = mongoose.model('Order', orderSchema)