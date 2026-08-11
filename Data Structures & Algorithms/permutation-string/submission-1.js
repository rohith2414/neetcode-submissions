class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s1.length > s2.length) return false;
        let s1Freq = new Array(26).fill(0);
        let s2Freq = new Array(26).fill(0);

        for(let i = 0; i < s1.length; i++) {
            s1Freq[s1[i].charCodeAt(0) - 97]++;
        }

        let j = 0, i = 0;
        while(j < s2.length) {
            s2Freq[s2[j].charCodeAt(0) - 97]++;

            if(j - i + 1 > s1.length) {
                s2Freq[s2[i].charCodeAt(0) - 97]--;
                i++;
            }

            let matched = true;
            for(let i = 0; i < 26; i++) {
                if(s1Freq[i] != s2Freq[i]) {
                    matched = false;
                    break;
                }
            }

            if(matched) return true;
            j++;
        }

        return false;
    }
}
