const mongoose = require('mongoose')
const dbConfig = require('./dbConfig')

module.exports = async () => {
    try {
        let URLConnection = dbConfig.host + dbConfig.host + dbConfig.timeOut
        await mongoose.connect(URLConnection, 
        {
            useNewUrlParser: true, 
            useUnifiedTopology: true}, 
        () => console.log("connected successfully with " + dbConfig.database));    
    }
    catch (error) { 
        console.log("could not connect");    
    }
}