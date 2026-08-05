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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */

    merge(leftPtr, rightPtr) {
        if(!leftPtr) {
            return rightPtr;
        } else if(!rightPtr) {
            return leftPtr;
        }

        if(leftPtr.val < rightPtr.val) {
            leftPtr.next = this.merge(leftPtr.next, rightPtr);
            return leftPtr;
        } else {
            rightPtr.next = this.merge(leftPtr, rightPtr.next);
            return rightPtr;
        }
    }

    mergeSort(lists, l, r) {
        if(l == r) return lists[l];
        let mid = l + Math.floor((r - l) / 2);
        let leftPtr = this.mergeSort(lists, l, mid);
        let rightPtr = this.mergeSort(lists, mid + 1, r);
        return this.merge(leftPtr, rightPtr);
    }

    mergeKLists(lists) {
        /*
        brute force is traverse all the linked lists and collect elements and sort and create
        resultant linked list using teh sorted list. 
        */
        if(!lists.length) {
            return null;
        } else if(lists.length == 1) {
            return lists[0] || null;
        }
        return this.mergeSort(lists, 0, lists.length -1);
    }
}
