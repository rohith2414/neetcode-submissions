class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        if(k === 0) return [];
        let count = {};
        let freqCount = Array.from({length: nums.length + 1}, () => []);
        for(let n of nums) { 
            count[n] = (count[n] || 0) + 1;
        }

        for(let n in count) {
            freqCount[count[n]].push(parseInt(n));
        }

        let res = [];
        for(let i = freqCount.length - 1; i > 0; i--) {
            for(let j = 0; j < freqCount[i].length; j++) {
                if(res.length < k) {
                    res.push(freqCount[i][j]);
                } else {
                    return res;
                }
            }
        }
        return res;
    }
}
