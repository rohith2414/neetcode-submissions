class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s1.length > s2.length) return false;
        let count = new Map();
        for(let i = 0; i < s1.length; i++) {
            count.set(s1[i], (count.get(s1[i]) || 0) + 1);
        }

        for(let i = 0; i <= s2.length - s1.length; i++) {
            let windMap = new Map();
            for(let j = i; j < i + s1.length; j++) {
                windMap.set(s2[j], (windMap.get(s2[j]) || 0) + 1);
            }

            let matched = true;
            for(let [key, freq] of count.entries()) {
                if(windMap.get(key) != freq) {
                    matched = false;
                    break;
                }
            }

            if(matched) return true;
        }

        return false;
    }
}
