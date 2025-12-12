// find the no of way to react the nth stair, if user can either climb one statir or two stair at time
function climbingStairs(n){
  if(n == 1 || n== 2 ){
    return n;
  }

  return climbingStairs(n-1) + climbingStairs(n-2);
}

console.log(climbingStairs(3));
