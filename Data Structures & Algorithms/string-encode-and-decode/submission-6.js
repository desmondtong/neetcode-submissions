class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = "";
        for (let str of strs) {
            const prefix = "[" + str.length + "]";
            encoded += prefix + str;
        }
        console.log({ encoded });

        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let decoded = [];

        let curPrefix = "";
        let i = 0;
        while (i < str.length) {
            if (str[i] != "[" && str[i] != "]") curPrefix += str[i];
            if (str[i] != "]") {
                i++;
                continue;
            }

            let s = i + 1;
            let e = i + 1 + Number(curPrefix);
            decoded.push(str.slice(s, e));

            // reset
            curPrefix = "";
            i = e;
        }

        return decoded;
    }
}
