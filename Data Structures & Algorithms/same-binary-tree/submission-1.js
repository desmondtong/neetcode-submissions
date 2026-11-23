/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        // dfs one p
        const dfs = (node, arr) => {
            if (!arr || arr.length == 0) {
                arr = [node?.val||null];
            } else {
                arr.push(node?.val||null);
            }

            if (!node) {
                arr.push(null);
                return arr;
            }

            dfs(node.left, arr);
            dfs(node.right, arr);

            return arr;
        };

        const arrP = dfs(p);
        const arrQ = dfs(q);
        console.log(arrP, arrQ);

        if (arrP.length != arrQ.length) return false;

        for (let i = 0; i < arrP.length; i++) {
            if (arrP[i] != arrQ[i]) return false;
        }

        return true;
    }
}
