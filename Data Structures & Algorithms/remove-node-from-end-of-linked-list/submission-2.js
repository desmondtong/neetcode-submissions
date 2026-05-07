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
        let slow = head;
        let fast = head;
        let i = 0;
        while (i < n) {
            fast = fast.next;
            i++;
        }
        console.log({ fast });
        if (fast == null && !slow.next) {
            return new ListNode("");
        } else if (fast == null && slow.next) {
            return slow.next;
        }

        // traverse until fast == null (reaches the end)
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next;
        }
        console.log({ slow });

        // remove next node
        const tmp = slow.next.next;
        slow.next = tmp;

        return head;
    }
}
