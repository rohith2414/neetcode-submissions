class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        //donot modify the nums, but doing it to register the approach

        let i = 0;
        while(true) {
            if(nums[Math.abs(nums[i])] < 0) {
                return Math.abs(nums[i]);
            }

            nums[Math.abs(nums[i])] = -nums[Math.abs(nums[i])];
            i++;
        }

    }
}
