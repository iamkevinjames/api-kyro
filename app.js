const express = require('express');
const app = express();
const Joi = require('@hapi/joi');
const movies = require('./users');

app.use(express.json());

app.use('/users', users);


app.get('/', (req,res) => {
    res.send('You are almost there!');
})

const port = process.env.PORT || '5000';
app.listen(port, () => console.log(`Server started on Port ${port}`));
