const express = require('express')
const app = express()
const orderRoute = require('./routes/orderRoute')
const tableRoute = require('./routes/tableRoute')
const cors = require('cors')

app.use(cors())

const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoDB = require('./database/mongoDB/dbConnection')


app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())



app.use(morgan('dev'))

mongoDB.connect()

app.use('/order', orderRoute)
app.use('/table', tableRoute)


const PORT = process.env.PORT || 3000



app.listen(PORT, () => {
    console.log(`server is listening on PORT ${PORT}`)
})