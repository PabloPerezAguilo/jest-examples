const express = require('express');
const mongoose = require('mongoose');
const Cat = require('./model');

const port = 80;
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then((db) => {
        console.log('Mongoose connected');
        exports.db = db;
    })
    .catch(console.log);

app.get("/cat", async(req, res) => {
    const cats = await Cat.find({});
    res.json(cats)
});

app.post("/cat", async(req, res) => {
    const cat = await Cat.create({ name: 'testName' });
    res.json(cat)
});

exports.server = app.listen(port, () => console.log('Server up at:', port));
