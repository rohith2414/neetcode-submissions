class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let res = 0, l = 0;
        let map = new Map();

        for(let r = 0; r < s.length; r++) {
            if(map.has(s[r])) {
                l = Math.max(map.get(s[r]) + 1, l);
            }

            map.set(s[r], r);
            res = Math.max(r - l + 1, res);
        }
        return res;
    }
}
