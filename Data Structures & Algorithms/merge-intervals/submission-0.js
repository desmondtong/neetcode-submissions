class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        intervals.sort((a, b) => a[0] - b[0]);
        // console.log({intervals})

        let out = [];
        let [curS, curE] = intervals[0];

        for (let i = 1; i < intervals.length; i++) {
            let [s, e] = intervals[i];

            if (s <= curE) {
                curS = Math.min(s, curS);
                curE = Math.max(e, curE);
            } else {
                out.push([curS, curE]);
                curS = s;
                curE = e;
            }
        }
        out.push([curS, curE]);

        return out;
    }
}
