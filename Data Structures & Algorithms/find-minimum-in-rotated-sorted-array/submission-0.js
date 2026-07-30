class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let ans = Infinity;

        let l = 0, r = nums.length - 1;

        while(l <= r) {
            let mid = l + Math.floor((r - l) / 2);

            if(nums[mid] > nums[r]) { //anamoly
                l = mid + 1;
            } else {
                ans = Math.min(ans, nums[mid]);
                r = mid - 1;
            }
        }

        return ans;
    }
}
