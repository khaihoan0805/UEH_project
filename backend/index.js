const express = require('express')
const app = express()
const orderRoute = require('./routes/orderRoute')
const tableRoute = require('./routes/tableRoute')

const bodyParser = require('body-parser')
const morgan = require('morgan')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(morgan('dev'))

app.use('/order', orderRoute)
app.use('/table', tableRoute)

const PORT = process.env.PORT || 3000



app.listen(PORT, () => {
    console.log(`server is listening on PORT ${PORT}`)
})