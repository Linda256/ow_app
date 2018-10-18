const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');


//load calculateNum.js to do math
const calculateNum = require('./calculateNum');

let count=0;
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/',(req,res) =>{
  count++;
  const visits = {visits: count}
  res.json(visits);
})

app.post('/math',(req,res) =>{
  console.log(req.body.input);
  let expStr = req.body.input;
  let result=calculateNum(expStr);

  let output =  {result: result};
  res.json(output);
})

app.use('/game',express.static('public'));

app.get('/game',(req,res)=>{
  res.sendFile(__dirname+'/public/index.html');
})

app.listen(port, ()=>console.log(`Server running on port ${port}`));