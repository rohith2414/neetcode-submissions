class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let countOfZeros = 0, idx = -1;
        for(let i = 0; i < nums.length; i++) {
            if(nums[i] === 0) {
                countOfZeros++;
                if(countOfZeros == 1) {
                    idx = i;
                }
            }

            if(countOfZeros > 1) {
                return Array.from({length: nums.length}, () => 0);
            }
        }
        if(countOfZeros == 1) {
            let prodWithoutZero = nums.reduce((acc, n, i) => i === idx ? acc : acc * n, 1);
            return nums.map((n, index) => {
                return idx === index ? prodWithoutZero : 0
            });
        }

        let prodOfAllNums = nums.reduce((acc, n) => {
            acc *= n;
            return acc
        }, 1);

        let res = nums.map((n) => {
            return prodOfAllNums/n;
        })
        return res;
    }
}
