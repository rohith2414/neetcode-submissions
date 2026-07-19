class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    isAlphanumeric(s) {
         let code = s.charCodeAt(0);

         return (code >= 48 && code <=57) || (code >=65 && code <= 90) || (code >= 97 && code <= 122);
    }

    isPalindrome(s) {
        let i = 0, j = s.length - 1;
        while (i < j) {
            if(this.isAlphanumeric(s[i]) && this.isAlphanumeric(s[j])) {
                if(s[i].localeCompare(s[j], undefined, { sensitivity: "base"}) === 0){
                    i++;
                    j--;
                } else{
                    return false;
                }
            } else if(!this.isAlphanumeric(s[i])) {
                i++;
            } else if(!this.isAlphanumeric(s[j])) {
                j--;
            }
        }
        return true;
    }
}
