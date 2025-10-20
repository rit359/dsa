var twoSum = function(arr, target) {
     // sorting asending order first
     for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                 let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                j = -1;
            }
        }
    // take two pointer left & rigth if sum greter than target then decrease right & when sum less than target then increase left , third check for sum equals target
    let left =0;
     let right = arr.length -1;
     while(left < right){
        let sum = arr[left] + arr[right];
    if(sum > target){
        right --;
    }else if(sum < target){
        left ++;
    }else if(sum ==target){
        return [left,right];
    }
    else{
        return false;
    }
    }
};


//Two sum using map

function twoSum(arr, target){
    const map = new Map();
    for(let i =0; i<arr.length; i++){
    const calculateSum = target - arr[i];
    
    if(map.has(calculateSum)){
        return [map.get(calculateSum),i];
    }
    map.set(arr[i],i);
}
console.log(map)
return -1
}

const arr = [2,9,7,11,12,15,23];
const target = 9;
console.log(twoSum(arr, target));
