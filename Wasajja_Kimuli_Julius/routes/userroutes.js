const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Patient = mongoose.model('Patient');


router.get('/', (req, res) => {
    res.render('patientform')
})

router.post('/', async(req, res) => {
    try {
        const addpatient = new Patient(req.body);
        //console.log(req.body)
        await addpatient.save();
        res.send('patient added')

    } catch (err) {
        console.log(err);
    }
})

module.exports = router;