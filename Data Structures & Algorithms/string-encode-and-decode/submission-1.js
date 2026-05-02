class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        // return strs.join('#');
        let res = '';
        for(let str of strs) {
            res += str.length + '#' + str;
        }
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        // return str.split('#');
        let ans = [];
        let i = 0, j = 0;
        while(i < str.length) {
            while(str[i] != '#' && i < str.length){
                i++;
            }
            let size = str.slice(j, i);
            size = parseInt(size);
            i = i + 1;
            j = i + size;
            ans.push(str.slice(i, j));
            i = j;
        }
        return ans;
    }
}
