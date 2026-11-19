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
        const dummy = new ListNode();

        // store nodes in arr
        const arr = [];
        let cur = head;
        while (cur) {
            arr.push(cur);
            cur = cur.next;
        }
        console.log(arr);

        // two pointer
        let l = 0;
        let r = arr.length - 1;
        let tail = dummy;
        while (l < r) {
            tail.next = arr[l];
            tail.next.next = arr[r];

            tail = tail.next.next;
            l++;
            r--;
        }

        if (l === r) {
            tail.next = arr[l];
            tail = tail.next;
        }
        tail.next = null; // removed the .next for last node

        return dummy.next;
    }
}
