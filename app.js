const express = require('express');
// Create express instance
const app = express();
// Import Mongoose package to connect to DB
const mongoose = require('mongoose');
// Environment config file
require('dotenv/config');
// Parsing node body requests to json
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// Import Routes
const clientsRoute = require('./routes/clients')

app.use('/clients', clientsRoute)


// Routes
app.get('/', (req, res) =>{
    res.send('We are home');
});

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log("Connected to DB!");
},
{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// Start listening at port specified
app.listen(3000)