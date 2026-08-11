class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let countT = {};
        for(let i = 0; i < t.length;i++) {
            countT[t[i]] = (countT[t[i]] || 0) + 1;
        }

        let resLen = Infinity;
        let res = [];
        let have = Object.keys(countT).length;
        let need = 0;
        let i = 0;
        let countS = {};
        for(let j = 0; j < s.length; j++) {
            countS[s[j]] = (countS[s[j]] || 0) + 1;
            if(countT[s[j]] && countT[s[j]] == countS[s[j]]) {
                need++;
            }

            while(have == need) {
                if(j - i + 1 < resLen) {
                    res = [i, j];
                    resLen = j - i + 1;
                }
                countS[s[i]]--;
                if(countT[s[i]] && countS[s[i]] < countT[s[i]]) {
                    need--;
                }
                i++;
            }
        }

        return res.length ? s.substring(res[0], res[1] + 1) : "";
    }
}
