class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        position = position.map((a, idx) => [a, idx]);
        position.sort((a, b) => a[0] - b[0]);

        let count = 0, previousArrivalTime = 0;

        for(let i = position.length - 1; i >= 0; i--) {
            let t = (target - position[i][0]) / speed[position[i][1]];

            if(t > previousArrivalTime) {
                count++;
                previousArrivalTime = t;
            }
        }
        return count;
    }
}
