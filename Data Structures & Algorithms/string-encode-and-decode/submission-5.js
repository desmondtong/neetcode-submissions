const DELIMITER = "#";

class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = "";
        for (const str of strs) {
            encoded = encoded + str.length + DELIMITER + str;
        }

        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const decodedStrArr = [];
        let i = 0;

        while (i < str.length) {
            let strLength = "";
            let n = i;
            while (str[n] != DELIMITER) {
                strLength = strLength + str[n];
                n++;
            }
            const curStr = str.slice(n + 1, n + 1 + Number(strLength));

            decodedStrArr.push(curStr);

            i = n + DELIMITER.length + Number(strLength);
        }

        return decodedStrArr;
    }
}
