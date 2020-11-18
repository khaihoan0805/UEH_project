const mongoose = require('mongoose')
const Table = require('../model/table')

module.exports.postTable = async (req, res, next) => {
    try {
        const table = new Table({
            _id: new mongoose.Types.ObjectId(),
            name: req.body.name,
            price: req.body.price
        })
        await product.save()
        return res.status(200).json({
            message: "create successfully",
            table: table
        })
    }
    catch (error) {
        console.log(error)
        return res.status(500).json({
            error: error
        })
    }
}

module.exports.getAll = async (req, res, next) => {
    try {
        let findingTable = await Table.find({})
        if (!findingTable) {
            return res.status(404).json({
                message: "nothing in database"
            })
        }
        let response = {
            count: findingTable.length,
            products: findingTable
        }
        return res.status(200).json({
            message: "finding all products successfully",
            details: response
        })
    }
    catch (error) {
        console.log(error)
        return res.status(500).json({
            error: error
        })
    }
}