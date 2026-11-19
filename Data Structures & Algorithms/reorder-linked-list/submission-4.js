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
     * @return {void}
     */
    reorderList(head) {
        // find mid point
        let ll1 = head;

        let slow = head;
        let fast = head;
        while (fast.next && fast.next.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        // initialised second linked list
        let cur = slow.next;
        let prev = null;

        // cut off the first half
        slow.next = null;

        // reverse ll2
        while (cur) {
            const next = cur.next;
            // reverse
            cur.next = prev;

            // for next loop
            prev = cur;
            cur = next;
        }
        let ll2 = prev;

        // console.log({ ll1 });
        // console.log({ ll2 });

        let dummy = new ListNode();
        let tail = dummy;
        while (ll1) {
            // console.log("before", { ll1 });
            tail.next = ll1;
            ll1 = ll1?.next;

            // console.log("before", { ll2 });
            tail.next.next = ll2;
            ll2 = ll2?.next;
            // console.log("before", { ll1, ll2 });

            tail = tail.next.next;
            // console.log("after", { ll1, ll2 });
        }

        return dummy.next;
    }
}
