let path = require('path');
const express = require('express');
let cors = require('cors');
let bodyParser = require('body-parser');
let fetch = require('node-fetch');
const dotenv = require('dotenv');
dotenv.config();

// MeaningCloud API credentias load SENTIMENT_KEY from .env file
// Please make sure to create an account in MeaningCloud and obtain
// your own SENTIMENT_KEY then create a .env file and set it.
const SENT_KEY = process.env.SENTIMENT_KEY;
const SENT_API = process.env.MEANINGCLOUD_URL;

const app = express()

app.use(express.static('dist'))

// To use json
app.use(cors())

// To use url encoded values
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// Designates what port the app will listen to for incoming requests
app.listen(8081, function () {
  console.log('News app listening on port 8081!')
})

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.post('/article', async (req, res, next) => {
  let url = `${SENT_API}?key=${SENT_KEY}&lang=en&url=${req.body.url}`;
  const response = await fetch(url);
  try {
    const sentiment = await response.json();
    return res.send(sentiment);
  }
  catch(error) {
    console.log("Error", error);
  }
})