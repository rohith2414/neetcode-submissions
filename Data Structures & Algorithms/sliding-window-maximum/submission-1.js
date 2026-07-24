class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let ans = [], deque = [];
        for(let i = 0; i < nums.length; i++) {
            if (deque.length && deque[0] <= i - k) {
                deque.shift();
            }

            while(deque.length && nums[deque[deque.length - 1]] < nums[i]) {
                deque.pop();
            }

            deque.push(i);

            if(i >= k - 1)
                ans.push(nums[deque[0]]);
        }
        return ans;
    }
    /*
    maxSlidingWindow(nums, k) {
        let maxPQ = new MaxPriorityQueue(x => x[0]);

        let ans = [];
        for(let i = 0; i < nums.length; i++) {
            maxPQ.enqueue([nums[i], i]);

            if(i >= k - 1) {
                while(maxPQ.front()[1] <= i - k) {
                    maxPQ.dequeue();
                }

                ans.push(maxPQ.front()[0]);
            }
        }
        return ans;
    }
    */
    
}
