var twoSum = function(arr, target) {
     for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                 let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                j = -1;
            }
        }
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
