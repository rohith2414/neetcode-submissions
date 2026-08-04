class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let slow = 0;
        let fast = 0;

        do {
            slow = nums[slow];
            fast = nums[nums[fast]];
        } while(slow != fast)

        slow = 0;
        while(slow != fast) {
            slow = nums[slow];
            fast = nums[fast];
        }

        return slow; //fast


        /*
        //donot modify the nums, but doing it to register the approach

        let i = 0;
        while(true) {
            if(nums[Math.abs(nums[i])] < 0) {
                return Math.abs(nums[i]);
            }

            nums[Math.abs(nums[i])] = -nums[Math.abs(nums[i])];
            i++;
        }
        */

    }
}
