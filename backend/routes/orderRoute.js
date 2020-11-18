const express = require('express')
const Router = express.Router()
const order = require('../controller/orders')

Router.post('/postOrder', order.postOrder)

module.exports = Router