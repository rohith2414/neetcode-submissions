class TimeMap {
    constructor() {
        this.keyStore = new Map();
        
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if(!this.keyStore.get(key)) {
            this.keyStore.set(key, []);
        }

        this.keyStore.get(key).push([timestamp, value]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if(!this.keyStore.get(key)) {
            return '';
        }

        let values = this.keyStore.get(key);
        let l = 0, r = values.length - 1;
        let min = -1;
        while (l <= r) {
            let mid = l + Math.floor((r - l) / 2);

            if(values[mid][0] > timestamp) {
                r = mid - 1;
            } else {
                min = mid;
                l = mid + 1;
            }
        }

        return min == -1 ? '' : values[min][1];
    }
}
