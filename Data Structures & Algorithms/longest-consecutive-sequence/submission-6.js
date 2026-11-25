class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(!nums.length) return 0;
        nums = nums.sort((a,b) => a - b);
        let count = 1, res = 1;
        for(let i = 0; i < nums.length - 1; i++) {
            if(nums[i] + 1 === nums[i + 1]) {
                count++;
            } else if(nums[i] === nums[i + 1]) {
                continue;
            } else {
                res = Math.max(res, count);
                count = 1;
            }
        }

        return Math.max(res, count);
    }
}
