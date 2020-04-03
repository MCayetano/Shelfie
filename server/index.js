const express = require('express');
const Controller = require('./Controller/controller');

const app = express()

app.use(express.json());

//GET



//POST


//PUT


//DELETE


const port = 4040;

app.listen(port, () => (console.log(`server jumping on port ${port}`)));