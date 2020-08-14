const express = require('express');
const app = express();
app.use(express.static(__dirname + '/public'));

const Patient = require('./models/patient')
require('./models/patient')

require('dotenv/config')



//requiring body parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }))


const path = require('path');
app.use(express.static('public'));

//setting view engine and specifying the views directory
app.set('view engine', 'pug');
app.set('views', './views');

const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.on('open', () => {
        console.log('Mongoose connection open');
    })
    .on('error', (err) => {
        console.log(`Connection error: ${err.message}`);
    });


//requiring Salesagent Routes


const userRoutes = require('./routes/userroutes');
app.use('/', userRoutes);


// app.get('*', function(req, res) { res.render('error'); });


//app.get('*', function(req, res) { res.render('error'); });
app.listen(3500, () => console.log('listening on port 3500')); // new