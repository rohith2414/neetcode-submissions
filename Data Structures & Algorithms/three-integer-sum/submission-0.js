class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let map = new Map();
        let res = new Set();

        for(let i = 0; i < nums.length; i++) {
            map.set(nums[i], i);
        }

        for(let i = 0; i < nums.length; i++) {
            for(let j = i + 1; j < nums.length; j++) {
                let rem = -(nums[i] + nums[j]);

                if(map.get(rem) && map.get(rem) > i && map.get(rem) > j) {
                    res.add(JSON.stringify([nums[i], nums[j], rem].sort()));
                }
            }
        }

        return Array.from(res).map(JSON.parse);
    }
}
