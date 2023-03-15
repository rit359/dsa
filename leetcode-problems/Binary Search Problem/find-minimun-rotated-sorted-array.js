//https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/


/*
TC : O(logn)
SC : O(1)
*/
 var findMin = function(nums) {
    let start =  0;
    let end = nums.length-1;
    let N = nums.length;

    while(start <= end){

        if(nums[start] < nums[end] ){
            return nums[start];
        }
        let mid = parseInt(start + (end-start)/2);

        let left = (mid-1+N)%N;
        let right = (mid+1)%N;


        if(nums[mid] <= nums[left] && nums[mid] <= nums[right]){
            return nums[mid];
        }else if(nums[start] <= nums[mid]){
            start = mid+1;
        }
        else if(nums[end] >= nums[mid]){
            end = mid-1;
        }

       
        
    }
};