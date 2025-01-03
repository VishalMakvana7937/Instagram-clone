// const http = require('http');

// const server = http.createServer((req, res) => {
//     console.log("Server created..!");
//     res.end("Heloo");
// })

// server.listen(5000, "localhost", () => {
//     console.log('Server is running on port 5000');

// })

const express = require('express');
const app = express();
const port = 5000;
const mongoose = require('mongoose');
const mongoUrl = require('./key');
const cors = require('cors');

app.use(cors());

require('./models/model');
app.use(express.json());
app.use(require("./routes/auth"))

mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB: ", err);
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
