class Solution {
    /**
     * @param {string[]} timePoints
     * @return {number}
     */
    findMinDifference(timePoints) {
        timePoints.sort((a, b) => a.localeCompare(b));
        console.log({ timePoints });

        let min = Infinity;
        for (let i = 0, j = timePoints.length - 1; i < timePoints.length, j >= 0; i++, j--) {
            // ascending
            const ascNext = i == timePoints.length - 1 ? 0 : i + 1;
            const diffi = timeDiff(timePoints[ascNext], timePoints[i]);

            // descending
            const dscNext = j == 0 ? timePoints.length - 1 : j - 1;
            const diffj = timeDiff(timePoints[dscNext], timePoints[j]);
            // console.log(timePoints[i - 1], timePoints[i]);
            // console.log(timePoints[j], timePoints[j + 1]);
            min = Math.min(min, diffi, diffj);

            // console.log({ diffi, diffj, min });
        }

        return min;
    }
}

function timeDiff(tp1, tp2) {
    const [h1, m1] = tp1.split(":");
    const [h2, m2] = tp2.split(":");
    // console.log({ h1, m1 });
    // console.log({ h2, m2 });

    let out;
    if (h1 <= h2) {
        out = (+h2 - +h1) * 60 + (+m2 - +m1);
    } else {
        out = (23 - +h1) * 60 + (60 - +m1) + (+h2 * 60 + +m2);
    }

    return Math.abs(out);
}
