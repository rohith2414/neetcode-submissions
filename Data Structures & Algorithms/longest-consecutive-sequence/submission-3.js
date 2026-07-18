class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(!nums.length) return 0;
        let set = new Set();
        for(let i = 0; i < nums.length; i++) {
            set.add(nums[i]);
        }

        let count = 1, max = 1;
        for(let i = 0; i < nums.length; i++) {
            let num = nums[i];
            if(set.has(num - 1)) continue;
            count = 1;
            while(set.has(num + 1)) {
                count++;
                num += 1;
            }

            if(count > max) {
                max = count;
            }
        }
        return max;
    }
}
