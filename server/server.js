const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')

// DEFAULT SETTINGS 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// DATABASE
mongoose.connect('mongodb://127.0.0.1:27017/Blogging-website')
    .then(console.log("DB CONNECTED!!!"))
    .catch((err) => console.log(err.message));

// API 
app.use(require('./apis/blogAPI'));

const port = 3000;
app.listen(port, () => {
    console.log(`SERVER STARTED AT PORT ${port}`);
})