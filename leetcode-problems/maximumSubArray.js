//Problem - Given an integer array nums, find the subarray with the largest sum, and return its sum.
let array = [-2,1,-3,4,-1,2,1,-5,4];

//Brute force solution with O(n^2) time complexcity
for(let i=0;i < array.length; i++){
    let currentSum = 0;
    for(let j=i; j< array.length; j++){
        //for(let k =j)
      currentSum += array[j];
      if(currentSum > maximumSum ){
          maximumSum = currentSum
      }
        
    }
    
}

// Optimised solution using kadane's algorithum with O(n) time complexcity
/** This is solved using kadane's algorithum , this algorithum say take two variables sum and max with intial value sum as 0 and max as array first element
then iterate on each element
add each elment to previous sum , then take maximum value b/w previous max and current sum , one more thing if sum value if less then 0
then again sum will become 0*/
let sum = 0;
let max = array[0];

for (let i=0;i<array.length; i++){
    sum = sum + array[i];
    max = Math.max(max, sum);
    if(sum < 1){
        sum = 0;
    }
}
console.log(max);

