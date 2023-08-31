require('dotenv').config();

const express = require('express');
const db = require('./db/connect');

const app = express();


//Connecting DB
db();



app.get('/', (req, res) => {
    res.send('Welcome to Nodejs');
})

//Middlewares
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
console.log(`App is running on PORT ${PORT}`);
});