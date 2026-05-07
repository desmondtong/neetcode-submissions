// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        let dummy = new Node(0);
        let map = new Map(); // oldNode : newNode

        let oriList = head;
        let newList = dummy;

        let prev = null;
        while (oriList) {
            newList.next = new Node(oriList.val);
            prev = newList.next;

            // set map
            map.set(oriList, prev);

            // for next loop
            newList = newList.next;
            oriList = oriList.next;
        }
        // console.log(map);

        newList = dummy.next;
        while (head) {
            let newRandomNode = map.get(head.random);
            console.log({ newRandomNode });
            newList.random = newRandomNode;

            newList = newList.next;
            head = head.next
        }
        console.log(dummy);

        return dummy.next;
    }
}
