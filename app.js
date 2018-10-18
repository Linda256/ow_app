const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');


//load calculateNum.js to do math
const calculateNum = require('./math/calculateNum');


const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//This is a naive method. visit count usually should be store in database. So the value won't be reset to 0 because of resetting server
let count=0;
app.get('/',(req,res) =>{
  count++;
  const visits = {visits: count}
  res.json(visits);
})

app.get('/math',(req,res) => {
  res.sendFile(__dirname+'/math/math.html');
})

//user enter the number
app.post('/math',(req,res) =>{
  let expStr = req.body.input;
  let result=calculateNum(expStr);

  let output =  {result: result};
  res.json(output);
})

app.use('/game',express.static('game'));

app.get('/game',(req,res)=>{
  res.sendFile(__dirname+'/public/index.html');
})

app.listen(port, ()=>console.log(`Server is running on port ${port}`));