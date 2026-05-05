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
        const ks = this.keyStore;

        const val = ks.get(key) || [];
        val.push([timestamp, value]);
        ks.set(key, val);

        console.log({ ks });
        return null;
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        const ks = this.keyStore;
        if (!ks.has(key)) return "";

        // upper boundary
        const arr = ks.get(key);
        let lo = 0;
        let hi = arr.length;

        while (lo < hi) {
            let mid = Math.floor((hi + lo) / 2);

            if (arr[mid][0] <= timestamp) {
                lo = mid + 1;
            } else {
                hi = mid;
            }
        }

        if (lo - 1 == -1) return "";

        const [ts, value] = arr[lo - 1];
        console.log({ ts, value });

        return value;
    }
}
