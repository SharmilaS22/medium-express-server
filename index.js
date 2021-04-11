/*
Author : Sharmila S
Date   : 11-04-2021
medium link : <to-be-updated>
*/

const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello world");
});

app.get("/about", (req, res) => {
    res.send("About route");
});

app.listen(3000, () => console.log('Server listening at port 3000'));