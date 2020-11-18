const mongoose = require('mongoose')
const Order = require('../model/order')
const Table = require('../model/table')

module.exports.postOrder = async (req, res, next) => {
    try {
        let tableId = req.body.tableId
        let findingTable = await Table.findById(tableId).exec()
        console.log(findingTable)
        if (!findingTable) {
            return res.status(404).json({
                message: "table not found"
            })
        } else {
            const order = new Order({
                _id: mongoose.Types.ObjectId(),
                name: req.body.name,
                phone: req.body.phone,
                table: findingTable._id,
                quantity: req.body.quantity
            })
            let savedOrder = await order.save()
            return res.status(200).json({
                message: "created order successfully",
                savedOrder: savedOrder
            })
        }
    }
    catch (err) {
        console.log(err)
        res.status(500).json({
            error: err
        })
    }
}

module.exports.getAll = async (req, res, next) => {
    try {
    let findingOrders = await Order.find({})
    if (!findingOrders) {
        return res.status(404).json({
            message: 'nothing in database'
        })
    } else {
        return res.status(200).send(findingOrders)
    }
}
catch (error) {
    console.log(error)
    return res.status(500).json({
        error: error
    })
}
}