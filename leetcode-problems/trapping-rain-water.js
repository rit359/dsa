// brueteforce approach
// Time complexcity : O(n^2)
var trap = function(height) {
    var totalWater = 0
    for(let i =0;i<height.length;i++){
        let maxLeft = height[0];
        let maxRight = height[i];
        for(let j=0;j<=i;j++){
            if(height[j] > maxLeft){
                maxLeft = height[j];
            }
        }
        for(let k=i;k<=height.length;k++){
            if(height[k] > maxRight){
                maxRight = height[k];
            }
        }
        totalWater+= Math.min(maxLeft,maxRight) - height[i];
    }
    return totalWater;
};



// Time complexcity : O(n), Sc: O(n)

var trap = function(height) {
    var totalWater = 0;
    let maxLeftArr = [];
    let maxRightArr = [];
    let maxLeft= height[0];
    let maxRight= height[height.length-1];
    maxLeftArr[0]=maxLeft;
    maxRightArr[height.length-1]=maxRight;
    for(let k=1;k<height.length;k++){
        if(height[k] > maxLeft){
            maxLeft = height[k];
        }
        maxLeftArr[k] = maxLeft;
    }
    for(let k=height.length-2;k>=0;k--){
        if(height[k] > maxRight){
            maxRight = height[k];
        }
        maxRightArr[k] = maxRight;
    }
    for(let i=0;i<height.length;i++){
        totalWater+= Math.min(maxLeftArr[i],maxRightArr[i])-height[i];
    }
    return totalWater;
};



// Time complexcity : O(n), Sc: O(1)

var trap = function(height) {
    var totalWater = 0;
    let maxLevel = 0;
    let maxIndex = 0;
    for(let k=1;k<height.length;k++){
        if(height[k] > maxLevel){
            maxLevel = height[k];
            maxIndex = k;
        }
    }
    console.log(maxLevel,maxIndex);
   let maxLeft = height[0];
   let maxRigth = maxLevel;
    for(let i=0;i<maxIndex;i++){
        if(height [i] > maxLeft){
            maxLeft=height [i];
        }
        totalWater+= Math.min(maxLeft,maxRigth)-height[i];
    }
    maxLeft = maxLevel;
    maxRigth = height[height.length-1];
    for(let i=height.length-1;i>maxIndex;i--){
         if(height [i] > maxRigth){
            maxRigth=height [i];
        }
        totalWater+= Math.min(maxLeft,maxRigth)-height[i];
    }
    return totalWater;
};
