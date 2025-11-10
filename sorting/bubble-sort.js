let arr = [10,30,15,12,8];


// logic for sorting in asending order
for(let a=0; a <arr.length; a++){
  for(let i=0; i < (arr.length-a); i++){
      let temp = arr[i];
      if(arr[i] > arr[i+1]){
        arr[i] = arr[i+1];
        arr[i+1] = temp;
      }
  }
}

console.log(arr);


// logic for sorting in decending order
for(let a=0; a <arr.length; a++){
  for(let i=0; i < (arr.length-a); i++){
      let temp = arr[i];
      if(arr[i] < arr[i+1]){
        arr[i] = arr[i+1];
        arr[i+1] = temp;
      }
  }
}

console.log(arr);
