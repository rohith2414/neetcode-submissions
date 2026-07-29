class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */

    leftMinEle(arr) {
        let st = [];
        let res = [];
        
        for(let i = 0; i < arr.length; i++) {
            while(st.length && arr[st[st.length - 1]] >= arr[i]) {
                st.pop();
            }
            res.push(st.length ? st[st.length - 1] : -1 );
            st.push(i);
        }
        return res;
    }

    rightMinEle(arr) {
        let st = [];
        let res = [];
        
        for(let i = arr.length - 1; i >= 0; i--) {
            while(st.length && arr[st[st.length - 1]] >= arr[i]) {
                st.pop();
            }
            res.unshift(st.length ? st[st.length - 1] : arr.length );
            st.push(i);
        }
        return res;
    }

    largestRectangleArea(heights) {
        let leftMinArr = this.leftMinEle(heights);
        let rightMinArr = this.rightMinEle(heights);
        let max = 0;

        for (let i = 0; i < heights.length; i++) {
            let breadth = rightMinArr[i] - leftMinArr[i] - 1;
            max = Math.max(max, heights[i] * breadth);
        }

        return max;
    }
}
