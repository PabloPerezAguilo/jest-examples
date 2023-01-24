const express = require('express');

const port = 80;
const app = express();

app.get("/echo/:name", (req, res) => {
    res.send({ name: req.params.name })
});

exports.server = app.listen(port);
