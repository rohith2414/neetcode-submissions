class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let res = [], st = [];
        for(let i = temperatures.length - 1; i >= 0 ; i--) {
            while (st.length && temperatures[st[st.length - 1]] <= temperatures[i]) {
                st.pop();
            }
            res.unshift(st.length ? st[st.length - 1] - i : 0);
            st.push(i);
        }
        return res;
    }
}
