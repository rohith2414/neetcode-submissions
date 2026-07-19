class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0, r = heights.length - 1, res = Number.MIN_SAFE_INTEGER;

        while (l < r) {
            let length = r - l;
            let height = Math.min(heights[l], heights[r]);
            let area = length * height;
            res = Math.max(area, res);

            if(heights[l] < heights[r]) {
                l++;
            } else {
                r--
            }
        }
        return res;
    }
}
