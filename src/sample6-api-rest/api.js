const express = require('express');

const port = 80;
const app = express();

app.use(express.json())
app.get("/echo/:name", (req, res) => {
    res.send({ name: req.params.name })
});

app.post("/sort/", (req, res) => {
    res.send(req.body.sort())
});

exports.server = app.listen(port);
