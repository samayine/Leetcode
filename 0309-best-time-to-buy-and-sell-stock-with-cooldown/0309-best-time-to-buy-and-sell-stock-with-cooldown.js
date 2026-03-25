/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length <= 1) return 0;
    
    const n = prices.length;
    const hold = new Array(n).fill(0);
    const cool = new Array(n).fill(0);
    const ready = new Array(n).fill(0);
    
    // Base case
    hold[0] = -prices[0];
    cool[0] = 0;
    ready[0] = 0;
    
    for (let i = 1; i < n; i++) {
        hold[i] = Math.max(hold[i-1], ready[i-1] - prices[i]);
        cool[i] = hold[i-1] + prices[i];
        ready[i] = Math.max(ready[i-1], cool[i-1]);
    }
    
    return Math.max(cool[n-1], ready[n-1]);
};