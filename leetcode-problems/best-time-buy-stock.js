// Problem - Below is the array for buy and sell stocks , we need to find the maximum profit 
/** Solution - take two variables maxProfit and buyPrice , intially buy price will be array first element and max profit will be 0.
After that iterate on each element compare current element with previous buy price and if its is minimum update the buy price , also compare current profit with max profit 
and if it grater then update max profit as current profit */

let array = [7,1,5,3,6,2];
let maxProfit = 0;
let buyPrice = array[0];

for(let i =1; i<array.length; i++){
        buyPrice = Math.min(buyPrice, array[i]);
        currentProfit = array[i] - buyPrice;
        maxProfit = Math.max(maxProfit, currentProfit)
}
console.log(maxProfit);
