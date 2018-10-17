var calculateNum = function(expStr){
  let result = null;
  if (Number(expStr[0]) !== Number(expStr[0])) return result='please enter a number first';
  //let expArr = req.body.input.split(/+-*//);

  let mathOperation = {
    '+' : (x,y) => x+y,
    '-' : (x,y) => x-y,
    '*' : (x,y) => x*y,
    '/' : (x,y) => x/y
  }

  for(let i=1;i<expStr.length;i++){
      if (mathOperation.hasOwnProperty(expStr[i])){
        let x=Number(expStr.substring(0,i));
        let y=Number(expStr.substring(i+1));
        result= mathOperation[expStr[i]](x,y);
      }
  }
  return result;
}

// let expStr='6543*4';
// console.log(calculateNum(expStr));
module.exports=calculateNum;
