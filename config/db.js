const mongoose = require('mongoose')


module.exports.dbConnection = () => {
    try {
        //url has to be added to env file
        mongoose.connect('mongodb://0.0.0.0:27017/cardStatusDB');
        console.log("mongodb connection successful")

    } catch (error) {
        console.log(error)
    }
}