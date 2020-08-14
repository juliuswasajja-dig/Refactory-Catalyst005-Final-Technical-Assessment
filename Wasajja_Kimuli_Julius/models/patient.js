const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({

    surname: String,
    givenname: String,
    dateofbirth: String,
    residence: String,
    occupation: String,
    nationality: String,
    gender: String,
    email: String,
    category: String,

})


module.exports = mongoose.model('Patient', patientSchema)