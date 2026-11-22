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
        let ll1 = head;

        // find midpoint and split
        let slow = head;
        let fast = head;
        while (fast && fast.next?.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        // console.log({ slow, fast });

        let prev = null;
        let curr = slow.next;

        // cut ll1
        slow.next = null;

        // reverse ll2
        while (curr) {
            const next = curr.next;
            curr.next = prev;
            prev = curr;

            // next loop
            curr = next;
        }
        let ll2 = prev;

        // new linked list
        let dummy = new ListNode();
        let tail = dummy;
        while (ll1) {
            tail.next = ll1;
            ll1 = ll1?.next;

            tail.next.next = ll2;
            ll2 = ll2?.next;
            // console.log("=====",{ tail });
            // console.log(tail.next);

            tail = tail.next.next;
            // console.log("for next",{ tail });
        }

        return dummy.next;
    }
}
