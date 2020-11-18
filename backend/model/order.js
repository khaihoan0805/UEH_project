const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, require: true },
    phone: { type: String, require: true },
    table: { type: mongoose.Schema.Types.ObjectId, ref: 'Table' },
    quantity: { type: Number, default: 1 }
})

module.exports = mongoose.model('Order', orderSchema)