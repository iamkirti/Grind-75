var maxProfit = function (prices) {

let minPrice =prices[0];
let maxProfit=0;
for (let i = 1; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else if(prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice;
        }
    }
  
return maxProfit;
};

let prices = [7,6,4,3,1];

console.log(maxProfit(prices));
