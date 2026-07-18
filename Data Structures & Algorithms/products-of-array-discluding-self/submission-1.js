class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefixProductArr = Array.from({length: nums.length}, () => 1);
        let suffixProductArr = Array.from({length: nums.length}, () => 1);

        for(let i = 1; i < nums.length; i++) {
            prefixProductArr[i] = prefixProductArr[i - 1] * nums[i - 1]
        }
        for(let i = nums.length - 2; i >= 0; i--) {
            suffixProductArr[i] = suffixProductArr[i + 1] * nums[i+1]
        }

        let res = [];
        for(let i = 0; i < nums.length; i++) {
            res[i] = suffixProductArr[i] * prefixProductArr[i];
        }
        return res;
    }
}
