const express = require('express');
const axios = require('axios');
const { key } = require('../config/auth.json')

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    next();
})

app.get('/getTemp', (req, res) => {
    const API = `https://api.openweathermap.org/data/2.5/weather?q=Barretos&appid=${key}&units=metric`;
    axios(API)
        .then(response => {
            console.log(response.data)
            res.json(response.data)
        }).catch(err => {
            res.send('errrr!!!')
        })
})

app.listen(8080, () => {
    console.log('http://localhost:8080/')
})