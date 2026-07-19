class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let prefixMin = [prices[0]];
        
        for(let i = 1; i < prices.length; i++) {
            prefixMin[i] = Math.min(prefixMin[i-1], prices[i]);
        }

        let res = 0;

        for(let i = 0; i < prices.length; i++) {
            let profit = prices[i] - prefixMin[i];
            res = Math.max(res, profit);
        }

        return res;
    }
}
