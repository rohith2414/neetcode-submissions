class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let mpq = new MaxPriorityQueue(x => x[0]);
        let res = [];
        for(let i = 0; i < nums.length; i++) {
            mpq.enqueue([nums[i], i]);
            let idx = i - k;
            while(mpq.front()[1] <= idx) {
                mpq.dequeue();
            }

            if(i >= k - 1) {
                res.push(mpq.front()[0]);
            }
        }
        return res;
    }
}
