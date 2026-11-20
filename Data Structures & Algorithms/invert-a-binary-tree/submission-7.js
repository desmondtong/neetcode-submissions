/**
 * Definition for a binary tree root.
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
     * @return {TreeNode}
     */
    invertTree(root) {
        // BFS
        const queue = root ? [root] : [];
        let head = 0;
        while (head < queue.length) {
            // replace .shift() with pointer
            const cur = queue[head];
            head++;

            [cur.left, cur.right] = [cur.right, cur.left];

            if (cur.left) queue.push(cur.left);
            if (cur.right) queue.push(cur.right);
        }

        return root;
    }
}
