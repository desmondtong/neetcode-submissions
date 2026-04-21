const DELIMITER = "一";
const PLACEHOLDER = "空";

class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const modifiedStrs = strs.map((item) => (item == "" ? PLACEHOLDER : item));
        const encoded = modifiedStrs.length ? modifiedStrs.join(DELIMITER) : DELIMITER;

        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const decoded = str != DELIMITER ? str.split(DELIMITER) : [];
        const removedPlaceHolder = decoded.map((item) => (item == "空" ? "" : item));

        return removedPlaceHolder;
    }
}
