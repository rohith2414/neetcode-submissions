class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        position = position.map((a, idx) => [a, speed[idx]]);
        position.sort((a, b) => a[0] - b[0]);

        let count = 0, previousArrivalTime = 0, st = [];

        for(let i = position.length - 1; i >= 0; i--) {
            st.push((target - position[i][0]) / position[i][1]);

            if(st.length >= 2 && st[st.length - 1] <= st[st.length - 2]){
                st.pop()
            }
        }
        return st.length;
    }
}
