class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        // calculate time
        // sort from nearest to target to furthest
        const timePos = position.map((item, idx) => [(target - item) / speed[idx], item]);
        timePos.sort((a, b) => b[1] - a[1]);

        // main logic
        let st = [];
        let nosFleet = 0;
        for (let i = 0; i < timePos.length; i++) {
            // if the further point has time <= previous nearer point, means will form fleet; so we looking for previous greater time (while loop)
            // hence, use mono desc stack
            while (st.length && timePos[i][0] > timePos[st.at(-1)][0]) {
                st.pop(); 
            }

            // a new fleet is form when there is no more vehicle you can form fleet with
            if (st.length == 0) nosFleet++;

            st.push(i);
        }

        return nosFleet;
    }
}
