// const http = require('http');

// const server = http.createServer((req, res) => {
//     console.log("Server created..!");
//     res.end("Heloo");
// })

// server.listen(5000, "localhost", () => {
//     console.log('Server is running on port 5000');

// })

const express = require('express');
const { data } = require('./data');
const app = express();
const cors = require('cors');
const port = 5000;

app.use(cors());

app.get('/', (req, res) => {
    // res.end("My server data..!");
    res.json(data);
});

app.get('/about', (req, res) => {
    res.json("About Page..!")
});

app.listen(5000, () => {
    console.log(" Server is running on port 5000");

})