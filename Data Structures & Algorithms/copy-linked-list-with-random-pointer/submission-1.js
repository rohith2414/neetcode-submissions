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
        let temp = head;
        //inserting new node in between
        while(temp != null) {
            let node = new Node(temp.val);
            node.next = temp.next;
            temp.next = node;
            temp = temp.next.next;
        }

        //connecting the random;
        temp = head;
        while(temp != null) {
            let random = temp.random;
            if(random) {
                temp.next.random = random.next;
            } else {
                temp.next.random = null;
            }

            temp = temp.next.next;
        }

        //extracting the copied LL
        let dummy = new Node(-1);
        let res = dummy;
        temp = head;
        while(temp != null) {
            res.next = temp.next;
            temp.next = temp.next.next;
            res = res.next;
            temp = temp.next;
        }

        return dummy.next;
    }
}
