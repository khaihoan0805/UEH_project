const mongoose = require('mongoose')
const dbConfig = require('./dbConfig')
module.exports.connect = async () => {
    try {
        let URLConnection = 'mongodb://localhost:27017/'+ dbConfig.database +'serverSelectionTimeoutMS=5000&connectTimeoutMS=10000'
        await mongoose.connect(URLConnection, 
        {
            useNewUrlParser: true, 
            useUnifiedTopology: true}, 
        () => console.log("connected successfully"));    
    }
    catch (error) { 
        console.log("could not connect");    
    }
}