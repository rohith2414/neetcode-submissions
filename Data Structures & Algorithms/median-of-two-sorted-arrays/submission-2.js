class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let n1 = nums1.length;
        let n2 = nums2.length;

        if(n1 > n2)  return this.findMedianSortedArrays(nums2, nums1);

        let l = 0, r = n1;
        let n = n1 + n2;
        let leftRequired = Math.floor((n1 + n2 + 1) / 2); 
        while(l <= r) {
            let m1 = l + Math.floor((r - l) / 2);
            let l1 = -Infinity, l2 = -Infinity, m2 = leftRequired - m1;
            let r2 = m2 < nums2.length ? nums2[m2] : Infinity;
            let r1 = m1 < nums1.length ? nums1[m1] : Infinity;
            if(m1 - 1 >= 0) l1 = nums1[m1 - 1];
            if(m2 - 1 >= 0) l2 = nums2[m2 - 1];

            if(l1 > r2) {
                r = m1 - 1;
            } else if(l2 > r1) {
                l = m1 + 1;
            } else {
                if(n % 2 === 0) {
                    return (Math.max(l1, l2) + Math.min(r1, r2)) / 2;
                }
                return Math.max(l1, l2);
            }

        }

        return 0.0;
    }
}
