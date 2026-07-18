class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let map = new Map(), res = 0;
        for(let i = 0; i < nums.length; i++) {
            if(!map.get(nums[i])) {
                map.set(nums[i], 
                (map.get(nums[i] - 1) || 0) + (map.get(nums[i] + 1) || 0) + 1);

                map.set(nums[i] - (map.get(nums[i] - 1) || 0), map.get(nums[i]));
                map.set(nums[i] + (map.get(nums[i] + 1) || 0), map.get(nums[i]));


                res = Math.max(res, map.get(nums[i]));
            }
        }
        return res;
    }
}
