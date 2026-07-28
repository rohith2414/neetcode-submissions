class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let max = -Infinity;
        for (let i = 0; i < heights.length; i++) {
            let minBar = heights[i];
            for (let j = i; j < heights.length; j++) {
                let l = minBar = Math.min(minBar, heights[j]);
                let b = j - i + 1;
                max = Math.max(max, l * b);
            }
        }

        return max;
    }
}
