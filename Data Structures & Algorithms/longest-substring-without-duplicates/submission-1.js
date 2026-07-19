class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if(s.length == 1) return 1;
        let i = 0, j = 1, res = 0;
        let set = new Set();
        set.add(s[i]);
        while(j < s.length) {
            set.add(s[j]);
            while((j - i + 1) != set.size && set.has(s[j])) {
                set.delete(s[i]);
                i++;
            }

            set.add(s[j]);
            res = Math.max(res, j - i + 1);
            j++;
        }
        return res;
    }
}
