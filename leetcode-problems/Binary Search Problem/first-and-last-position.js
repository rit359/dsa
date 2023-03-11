https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/submissions/913059061/



/**
 * Solution
 * Time complexcity : O(logn)
 * Space complexcity : O(1)
 */
var searchRange = function(nums, target) {
let start=0;
let  end = nums.length-1;
let ans = [-1,-1];
while(start <= end){
    
    let mid = parseInt(start + (end-start)/2);
    console.log(mid);
      let number = nums[mid];
    if(number == target){
        ans[0] = mid;
        end = mid-1;
    }else if(number < target){
        start = mid+1;
    }else if(number > target){
        end = mid-1;
    }
}

start =0;
end = nums.length-1;
while(start <= end){
    let mid = parseInt(start + (end-start)/2);
    let number = nums[mid];
    if(number== target){
        ans[1] = mid;
        start = mid+1;
    }else if(number < target){
        start = mid+1;
    }else if(number > target){
        end = mid-1;
    }
}
return ans;
};
