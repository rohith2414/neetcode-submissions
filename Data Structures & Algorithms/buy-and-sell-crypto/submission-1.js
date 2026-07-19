class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let i = 0, j = 1, res = 0;
        while(j < prices.length) {
            let price = prices[j] - prices[i];
            res = Math.max(res, price);

            if(prices[j] < prices[i]) {
                i = j
            }
            j++;
        }

        return res;
    }
}
