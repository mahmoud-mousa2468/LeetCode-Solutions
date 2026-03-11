/**
 * Problem: 2. best-time-to-buy-and-sell-stock
 * Difficulty: Easy
 * Link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * * Strategy: Greedy / Sliding Window
 */

var maxProfit = function(prices) {
    let maxProfit=0;
      let minPrice=prices[0]
    for(let i=1;i<prices.length;i++){
        minPrice=Math.min(minPrice,prices[i])
        maxProfit=Math.max(maxProfit,prices[i]-minPrice)
    }
    return maxProfit
};

// Time Complexity: O(n)
// Space Complexity: O(1)
