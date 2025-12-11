function binarySearch(array, left, right, target){
  
  if(left > right){
    return false;
  }
  
  let mid = Math.floor((left+right)/2);
  
  if(array[mid] ==target){
    return true;
  }else if(array[mid] > target){
    return binarySearch(array,left,mid-1,target);
  }
  else if(array[mid] < target){
    return binarySearch(array,mid+1,right,target);
  }
}


const array = [1,2,3,4,5,6,7,8,9,10];
console.log(binarySearch(array, 0, array.length-1,1));