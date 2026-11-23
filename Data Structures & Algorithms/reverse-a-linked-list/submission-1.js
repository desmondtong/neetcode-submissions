/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        let prev = null;

        const reverse = (node) => {
            if (!node) return;

            const next = node.next;
            node.next = prev;
            prev = node;

            reverse(next);
        };

        reverse(head);
        return prev;
    }
}
