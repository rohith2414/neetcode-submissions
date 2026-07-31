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
            this.keyStore.set(key, new Map());
        }

        if(!this.keyStore.get(key).get(timestamp)) {
            this.keyStore.get(key).set(timestamp, []);
        }

        this.keyStore.get(key).get(timestamp).push(value);
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

        let seen = -1;

        for(let time of this.keyStore.get(key).keys()) {
            if(time <= timestamp) {
                seen = time;
            }
        }

        return seen == -1 ? '': this.keyStore.get(key).get(seen).at(-1);
    }
}
