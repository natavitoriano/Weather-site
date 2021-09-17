const express = require('express');
const axios = require('axios');
const cors = require('cors')
//Key generated on the website for API consumption https://openweathermap.org/api
const { key } = require('../config/auth.json');
const Cities = require('../database/models/cities');

const app = express();
app.use(express.json());

(async () => {
    const database = require('../database/db');

    try {
        await database.sync();
    } catch (error) {
    }
})();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE")
    app.use(cors());
    next();
})

//Save new searched cities or update if city already exists
app.get('/temp/:city', async (req, res) => {
    const API = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?q=${req.params.city}&appid=${key}&units=metric`,
    })
    try {
        const response = await API.get();
        const citie = await Cities.findOne({
            where: {
                name: response.data.name
            }
        })
        //check if the city has alredu been searched
        if(citie){
            //counter to see the number of times the city has been searched
             citie.count = citie.count + 1
             await citie.save();
        }else{
            //add the new city to the database
            await Cities.create({
                name: response.data.name,
                count: 1
            })
        }
        res.json(response.data)
    } catch (error) {
        res.send(error)
    } 
});

//Returns top five most searched cities
app.get('/topcities', async (req, res) => {
    const cities = await Cities.findAll({
        limit: 5,
        order: [
            ['count', 'DESC']
        ]
    })
    res.json(cities)
});

//Returns the last cities searched
app.get('/latestcities', async (req, res) => {
    const cities = await Cities.findAll({
        limit: 5,
        order: [
            ['updatedAt', 'DESC']
        ]
    })
    res.json(cities)
});

//Starting on port 8080
app.listen(8080, () => {
    console.log('http://localhost:8080/')
});