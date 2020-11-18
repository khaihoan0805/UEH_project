const express = require('express')
const Router = express.Router()
const table = require('../controller/tables')

Router.post('/postTable', table.postTable)
Router.get('/getAllTable', table.getAll)

module.exports = Router