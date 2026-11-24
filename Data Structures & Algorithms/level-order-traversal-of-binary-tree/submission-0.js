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
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root) {
        let out = [];

        let q = root ? [root] : [];
        let head = 0;

        while (q.length && head < q.length) {
            let curLevel = [];
            let queueLength = q.length;

            for (let i = head; i < queueLength; i++) {
                const cur = q[i];
                curLevel.push(cur.val);

                if (cur.left) q.push(cur.left);
                if (cur.right) q.push(cur.right);

                head++;
            }

            out.push(curLevel);
        }

        return out;
    }
}
