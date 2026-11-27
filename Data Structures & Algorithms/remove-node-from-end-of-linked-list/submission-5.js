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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        const dummy = new ListNode(0, head);
        let left = dummy,
            right = head;

        for (let i = 0; i < n; i++) right = right.next;

        while (right) {
            left = left?.next;
            right = right?.next;
        }
        // console.log({ left, right });
        left.next = left.next.next;

        return dummy.next;
    }
}
