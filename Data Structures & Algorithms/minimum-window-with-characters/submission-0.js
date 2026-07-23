class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        function isUpper(c) {
            return c.charCodeAt(0) >= 65 && c.charCodeAt(0) <= 90;
        }

        function isValidSubString(tHashUpper, tHashLower, sHashUpper, sHashLower) {
            for (let i = 0; i < 26; i++) {
                if (tHashUpper[i] != 0 && (tHashUpper[i] > sHashUpper[i])) {
                    return false;
                }
                if (tHashLower[i] != 0 && (tHashLower[i] > sHashLower[i])) {
                    return false;
                }
            }
            return true;
        }
        let tHashLower = Array.from({ length: 26 }, () => 0);
        let tHashUpper = Array.from({ length: 26 }, () => 0);
        let smallest = [];


        for (let i = 0; i < t.length; i++) {
            if (isUpper(t[i])) {
                tHashUpper[t[i].charCodeAt(0) - 65]++;
            } else {
                tHashLower[t[i].charCodeAt(0) - 97]++;
            }
        }

        let r = 0, l = 0, i, j;
        let sHashLower = Array.from({ length: 26 }, () => 0);
        let sHashUpper = Array.from({ length: 26 }, () => 0);
        while (r < s.length) {
            if (isUpper(s[r])) {
                sHashUpper[s[r].charCodeAt(0) - 65]++;
            } else {
                sHashLower[s[r].charCodeAt(0) - 97]++;
            }
            let changed = false;
            while (isValidSubString(tHashUpper, tHashLower, sHashUpper, sHashLower)) {
                changed = true;
                if (isUpper(s[l])) {
                    sHashUpper[s[l].charCodeAt(0) - 65]--;
                } else {
                    sHashLower[s[l].charCodeAt(0) - 97]--;
                }
                l++;
            }
            if (changed) {
                l--;
                if (isUpper(s[l])) {
                    sHashUpper[s[l].charCodeAt(0) - 65]++;
                } else {
                    sHashLower[s[l].charCodeAt(0) - 97]++;
                }
            }



            if (isValidSubString(tHashUpper, tHashLower, sHashUpper, sHashLower) && (i == undefined || (r - l) < (j - i))) {
                i = l;
                j = r;
            }
            r++;
        }
        return i != undefined ? s.substring(i, j + 1) : "";
    }
}
