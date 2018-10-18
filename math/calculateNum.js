var calculateNum = function(expStr){
  let result = null;
  //if first input is not a number, ask user to enter a number
  //This is a naive method not considering negative number at the begining.
  if (Number(expStr[0]) !== Number(expStr[0])) return result='please enter a number first';

  let mathOperation = {
    '+' : (x,y) => x+y,
    '-' : (x,y) => x-y,
    '*' : (x,y) => x*y,
    '/' : (x,y) => x/y
  }
//This is a naive solution, only considering math operation between two numbers.
//For math expression more two numbers, should
//    keep search the operator in the string,
//    parse the numbers seprate by each operator based on index of the operator.
//    consider the priority of operator.
//        compare the priority of operator of left and right
//        if the right operator has higher priority, keep seach next operator, parse the number, and calulate the right part first.
  for(let i=1;i<expStr.length;i++){
      if (mathOperation.hasOwnProperty(expStr[i])){
        let x=Number(expStr.substring(0,i));
        let y=Number(expStr.substring(i+1));
        result= mathOperation[expStr[i]](x,y);
      }
  }
  return result;
}

module.exports=calculateNum;
