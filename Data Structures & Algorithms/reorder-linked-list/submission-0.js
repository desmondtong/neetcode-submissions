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
        // find midpoint
        let slow = head;
        let fast = head;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        console.log("bef:", { slow });

        // store in stack
        let prev = null;
        let cur = slow.next;
        while (cur) {
            const next = cur.next;

            cur.next = prev;
            prev = cur;

            cur = next;
        }
        console.log("after:", { slow });
        slow.next = null;
        console.log("after null:", { slow });

        // reorder
        let first = head; // [2,4,6]
        let second = prev; // [10,8]
        console.log({ first });
        console.log({ second });
        while (second !== null) {
            const tmp1 = first.next;
            const tmp2 = second.next;

            first.next = second;
            second.next = tmp1;

            first = tmp1;
            second = tmp2;
            console.log("in:", { first, second });
        }
    }
}
