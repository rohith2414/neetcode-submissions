class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let maxLen = 0, l = 0, r = 0, maxFreq = 0;
        let hashMap = Array.from({length: 26}, () => 0);

        while(r < s.length) {
            hashMap[s[r].charCodeAt(0) - 'A'.charCodeAt(0)]++;
            maxFreq = Math.max(maxFreq, hashMap[s[r].charCodeAt(0) - 'A'.charCodeAt(0)]);

            while((r - l + 1 - maxFreq) > k) {
                hashMap[s[l].charCodeAt(0) - 'A'.charCodeAt(0)]--;
                l++;
                maxFreq = 0;
                for(let i = 0; i < 26; i++) {
                    maxFreq = Math.max(maxFreq, hashMap[i]);
                }
            }

            if((r - l + 1 - maxFreq) <= k) {
                maxLen = Math.max(maxLen, r - l + 1);
            }

            r++;

        }
        return maxLen;
    }
}
