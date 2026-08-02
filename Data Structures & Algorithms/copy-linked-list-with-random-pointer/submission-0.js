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
        let map = new Map();
        let i = 0;
        let temp = head;
        let randomNodesMap = new Map();
        let indexMap = new Map();
        let nodes = [];
        let dummy = new Node(0, null, null);
        let vol = dummy;

        while(temp != null) {
            let node = new Node(temp.val, null, null);
            nodes.push(node);
            vol.next = node;
            vol = node;
            randomNodesMap.set(temp, i++);
            temp = temp.next;
        }

        
        temp = head;
        vol = dummy.next;
        while(temp != null) {
            let idx = randomNodesMap.get(temp.random);
            vol.random = idx != undefined ? nodes[idx] : null;
            vol = vol.next;
            temp = temp.next;
        }

        return dummy.next;
    }
}
