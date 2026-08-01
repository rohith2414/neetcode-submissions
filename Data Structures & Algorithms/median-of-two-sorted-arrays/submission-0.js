class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let combinedArr = [];
        let i = 0, j = 0;

        while(i < nums1.length && j < nums2.length) {
            if(nums1[i] < nums2[j]) {
                combinedArr.push(nums1[i++]);
            } else {
                combinedArr.push(nums2[j++]);
            }
        }

        if(i < nums1.length) {
            combinedArr.push(...nums1.slice(i));;
        }

        if(j < nums2.length) {
            combinedArr.push(...nums2.slice(j));
        }

        let n = combinedArr.length;
        if( n % 2 == 0) {
            return (combinedArr[(n / 2) - 1] + combinedArr[Math.ceil(((n + 1) / 2) - 1)]) / 2;
        }
        return combinedArr[((n + 1) / 2) - 1];

    }
}
