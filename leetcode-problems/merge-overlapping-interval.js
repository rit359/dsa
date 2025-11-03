//Problem - You are given an array of intervals, where each interval is represented as [start, end].You need to merge all overlapping intervals and return the result.
const intervalArr = [[1,3],[2,6],[8,10],[15,18]]
//Output: [[1,6],[8,10],[15,18]]
//solution - first need to sort the array based on first element , then itreate on each and compare current first element with previous last element 
//if it less that or equal then update the range and if it not lies b/w  previous interval then create new intervals


const sortedArr = intervalArr.sort((a,b)=>a[0] - b[0]);

let merged = [sortedArr[0]];
for(let i=1; i< sortedArr.length; i++){
    currentInterval = sortedArr[i];
    lastInterval = merged[merged.length-1];
    if(currentInterval[0] <= lastInterval[1]){
        lastInterval[1] = Math.max(lastInterval[1], currentInterval[1]);
    }else{
        merged.push(currentInterval)
    }
}

console.log(merged);
