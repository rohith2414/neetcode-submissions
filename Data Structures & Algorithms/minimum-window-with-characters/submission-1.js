class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if(t.length > s.length) {
            return "";
        }

        let count = {};
        for(let i = 0; i < t.length; i++) {
            count[t[i]] = (count[t[i]] || 0) + 1;
        }

        let r = 0, l = 0, minLen = Infinity, startIdx = -1, countFrequency = t.length;

        while(r < s.length) {
            if(count[s[r]] > 0) {
                countFrequency--;
            }

            count[s[r]] = (count[s[r]] || 0) - 1;

            if(countFrequency == 0) {
                if(r - l + 1 < minLen) {
                    startIdx = l;
                    minLen = r - l + 1;
                }

                while(countFrequency == 0) {
                    if (r - l + 1 < minLen) {
                        startIdx = l;
                        minLen = r - l + 1;
                    }
                    count[s[l]]++;
                    if(count[s[l]] > 0) {
                        countFrequency++;
                    }
                    l++;
                }
            }
            r++;
        }

        return startIdx == -1 ? "" : s.substring(startIdx, startIdx + minLen);
    }
}
