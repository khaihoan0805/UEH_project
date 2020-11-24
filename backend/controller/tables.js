const mongoose = require('mongoose')
const Table = require('../model/table')

module.exports.postTable = async (req, res, next) => {
    try {
        const table = new Table({
            _id: new mongoose.Types.ObjectId(),
            name: req.body.name,
            description: req.body.description
        })
        await table.save()
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
        let findingTables = await Table.find({})
        if (!findingTables) {
            return res.status(404).json({
                message: "nothing in database"
            })
        }
        let response = {
            count: findingTables.length,
            tables: findingTables
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

module.exports.remove = (req, res, next) => {
    const id = req.query.productId
    Table.deleteOne({_id: id}).exec()
    .then(result => {
        console.log(result)
        res.status(200).json({
            message: "deleted successfully"
        })
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({
            message: err
        })
    })
}