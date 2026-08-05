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
     * @param {number} k
     * @return {ListNode}
     */

    reverseLL(head, lastNode) {
        let prev = null;
        let curr = head;
        while (curr != lastNode) {
            let nextNode = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nextNode;
        }

        return { revLL: prev, tail: head };
    }

    reverseKGroup(head, k) {
        let temp = head;
        let currHead = head;
        let count = 0;
        let reversedLL = null, currTail = null;
        while (temp != null) {
            count++;
            if (count == k) {
                let nextNode = temp.next;
                let { revLL, tail } = this.reverseLL(currHead, nextNode);
                if (!reversedLL && !currTail) {
                    reversedLL = revLL;
                    currTail = tail;
                } else {
                    currTail.next = revLL;
                    currTail = tail;
                }
                tail.next = nextNode;
                temp = tail;
                currHead = nextNode;
                count = 0;
            }
            temp = temp.next;
        }

        return reversedLL;
    }
}
