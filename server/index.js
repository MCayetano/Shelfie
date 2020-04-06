require('dotenv').config();
const express = require('express');
const massive = require('massive');
const Controller = require('./Controller/controller');

const app = express()
const { SERVER_PORT, CONNECTION_STRING } = process.env;

app.use(express.json());


massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
})

//GET



//POST


//PUT


//DELETE

app.listen(SERVER_PORT, () => (console.log(`Server Jumping On Port ${SERVER_PORT}`)));