class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
        minEatingSpeed(piles, h) {
            let max = -Infinity, ans = Infinity;

            for(let i = 0; i < piles.length; i++) {
                if(max < piles[i])
                    max = piles[i];
            }
            let l = 1, r = max;
            while(l <= r) {
                let mid = l + Math.floor((r - l) / 2);
                let sum = 0;
                for(let j = 0; j < piles.length; j++) {
                    let hours = Math.ceil(piles[j] / mid);
                    sum += hours;
                }

                if(sum > h) {
                    l = mid + 1;
                } else {
                    ans = Math.min(mid, ans);
                    r = mid - 1;
                }
            }

            return ans;
        }
}
