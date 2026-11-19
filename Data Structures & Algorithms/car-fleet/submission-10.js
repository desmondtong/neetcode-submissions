class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        // if (position.length == 1) return 1;

        const timePos = position.map((item, idx) => [(target - item) / speed[idx], item]);
        timePos.sort((a, b) => b[1] - a[1]); //sort desc based on position

        let st = []; // mono desc stack: to find previous greater time
        let nosFleet = 0;
        for (let i = 0; i < timePos.length; i++) {
            while (st.length && timePos[i][0] > timePos[st.at(-1)][0]) {
                st.pop();
            }
            if (st.length == 0) nosFleet++;

            st.push(i);
            // console.log({ i, nosFleet });
        }

        return nosFleet;
    }
}
