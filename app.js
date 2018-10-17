const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const calculateNum = require('./calculateNum');

let count=0;
const app = express();
const port = 3000;


app.listen(port, ()=>console.log(`Server running on port ${port}`));