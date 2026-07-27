class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let res = [];
        for(let i = 0; i < temperatures.length; i++) {
            let curr = temperatures[i], count = 1, j;
            for(j = i + 1; j < temperatures.length; j++) {
                if(curr < temperatures[j]) {
                    res.push(count);
                    break;
                } else {
                    count++;
                }
            }

            if(j == temperatures.length) {
                res.push(0);
            }
        }
        return res;
    }
}
