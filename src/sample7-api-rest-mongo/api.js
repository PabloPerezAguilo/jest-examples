require('dotenv').config({ path: __dirname + (process.env.DOTENV_PATH || '/.env') })
const express = require('express');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const Cat = require('./model');

const port = process.env.PORT;
const app = express();

(async() => {
    if (!process.env.BBDD_CONNECTSTRING) {
        exports.mongo = await MongoMemoryServer.create();
    }
    mongoose.set("strictQuery", true);
    exports.db = await mongoose.connect(process.env.BBDD_CONNECTSTRING || exports.mongo.getUri())
    console.log('Mongoose connected');
})()

app.get("/cat", async(req, res) => {
    const cats = await Cat.find({});
    res.json(cats)
});

app.post("/cat", async(req, res) => {
    const cat = await Cat.create({ name: 'testName' });
    res.json(cat)
});

exports.server = app.listen(port, () => console.log('Server up at:', port));
