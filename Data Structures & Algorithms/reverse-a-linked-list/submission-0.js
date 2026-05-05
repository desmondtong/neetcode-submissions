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
        let cur = head;

        while (cur) {
            const next = cur.next;
            console.log({ next });

            // construct prev
            cur.next = prev; // update .next
            prev = cur; // put updated cur into prev

            // next loop
            cur = next;
        }

        return prev
    }
}
