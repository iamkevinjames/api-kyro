const express = require('express');
const app = express();
const cors = require('cors')
const Joi = require('@hapi/joi');
const userData = require('./users');

app.use(cors());
app.use(express.json());

app.use('/user', userData);


app.get('/', (req,res) => {
    res.send('You are almost there!');
})










const port = process.env.PORT || '5000';
app.listen(port, () => console.log(`Server started on Port ${port}`));
