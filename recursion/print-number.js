// decending order

function printNumber(n){
  if(n == 0){
    return;
  }

  console.log(n);     // print first
  printNumber(n-1);   // then recursive call
}

// asending order
function printNumber(n){
  if(n == 0){
    return;
  }

  
  printNumber(n-1);   // then recursive call
  console.log(n);     // print after function call
}

printNumber(5);