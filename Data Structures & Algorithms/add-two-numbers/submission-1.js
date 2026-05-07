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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let dummy = new ListNode(0);

        let res = dummy;
        let passing = 0;
        while (l1 || l2) {
            let num1 = l1 ? l1.val : 0;
            let num2 = l2 ? l2.val : 0;

            let sum = String(num1 + num2 + passing);

            res.next = new ListNode(sum.length == 2 ? Number(sum[1]) : Number(sum));
            passing = sum.length == 2 ? Number(sum[0]) : 0;

            // next cycle
            res = res.next;
            l1 = l1 ? l1.next : null;
            l2 = l2 ? l2.next : null;
        }

        if (passing != 0) res.next = new ListNode(passing);

        // // dummy = dummy.next;
        // while (dummy) {
        //     console.log(dummy);
        //     dummy = dummy.next;
        // }

        return dummy.next;
    }
}
