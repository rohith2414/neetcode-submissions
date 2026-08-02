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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {

        if(!list1) return list2;
        if(!list2) return list1;

        if(list1.val < list2.val) {
            list1.next = this.mergeTwoLists(list1.next, list2);
            return list1;
        } else {
            list2.next = this.mergeTwoLists(list1, list2.next);
            return list2;
        }

        /*
        let l1 = list1, l2 = list2, mergedList = null, prev = null;

        while(l1 != null && l2 != null) {
            let node;
            if(l1.val < l2.val) {
                node = new ListNode(l1.val, null);
                if(prev) prev.next = node;
                if(!mergedList) {
                    mergedList = node;
                }
                l1 = l1.next;
            } else {
                node = new ListNode(l2.val, null);
                if(prev) prev.next = node;
                if(!mergedList) {
                    mergedList = node;
                }
                l2 = l2.next;
            }
            prev = node;
        }

        while(l1 != null) {
            let node = new ListNode(l1.val, null);
            if (prev) prev.next = node;
            if (!mergedList) {
                mergedList = node;
            }
            prev = node;
            l1 = l1.next;
        }

        while(l2 != null) {
            let node = new ListNode(l2.val, null);
            if (prev) prev.next = node;
            if (!mergedList) {
                mergedList = node;
            }
            prev = node;
            l2 = l2.next;
        }

        return mergedList;
        */
    }
}
