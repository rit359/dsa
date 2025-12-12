// find no of ways for going to party if either person can go alone or either in pair

//for exaple there are three friends A,B, C they having below options to go to party - they will have 4 ways as below
/*
(a,b),c
(a,c),b
(b,c),a
a,b,c
*/
function noOfWays(n){
  if(n == 1 || n== 2){
    return n;
  }

  return noOfWays(n-1) + (n-1 * noOfWays(n-2));
}

console.log(noOfWays(3));

