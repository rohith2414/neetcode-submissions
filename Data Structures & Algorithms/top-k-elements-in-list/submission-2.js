class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let obj = {};
        for(let num of nums) {
            obj[num] = (obj[num] || 0) + 1;
        }

        let heap = new MinPriorityQueue((x) => x[1]);
        for(let [num, freq] of Object.entries(obj)) {
            heap.enqueue([Number(num), freq]);
            if(heap.size() > k) {
                heap.dequeue();
            }
        }

        let res = [];
        for(let i = 0; i < k; i++) {
            res.push(heap.dequeue()[0]);
        }
        return res;
    }
}
