function exp(a, n){
  if(n ==0){
    return 1;
  }

  return a* exp(a, n-1);
}
console.log(exp(2,5));

// optimised approach of this problem

function expWithOptimisation(a, n){
  if(n ==0){
    return 1;
  }
  let half = expWithOptimisation(a, Math.floor(n/2));
  if(n%2 == 0){
  return half*half
  }else{
      return a*half*half;
  }
  return a* exp(a, n-1);
}
console.log(expWithOptimisation(2,5));
