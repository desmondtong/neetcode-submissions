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
        // initialise fast node
        let dummy = new ListNode(0, head);
        let slow = dummy;
        let fast = head;
        let i = 1;
        while (i < n) {
            fast = fast.next;
            i++;
        }
        console.log({ fast });

        // traverse until fast == null (reaches the end)
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next;
        }
        console.log({ slow });

        // remove next node
        const tmp = slow.next.next;
        slow.next = tmp;
        console.log({ slow });

        return dummy.next;
    }
}
