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
        let st = [];
        let max = 0;

        for (let i = 0; i < heights.length; i++) {
            while(st.length && heights[st[st.length - 1]] > heights[i]) {
                let nse = i;
                let pse = st.length - 2 >= 0 ? st[st.length - 2] : -1;
                max = Math.max(max, heights[st[st.length - 1]] * (nse - pse - 1));
                st.pop();
            }
            st.push(i);
        }

        while(st.length > 0) {
            let nse = heights.length;
            let pse = st.length - 2 >= 0 ? st[st.length - 2] : -1;
            max = Math.max(max, heights[st[st.length - 1]] * (nse - pse - 1));
            st.pop();
        }

        return max;
    }
}
