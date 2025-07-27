/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
            let beg=1;
            let last =n;
            let mid;
        while(beg<last){
            mid=Math.floor((beg+last)/2);
            if(isBadVersion(mid)){
                last=mid;
            }else{
                beg=mid+1;
            }

        }
        return beg;
    };
};

let n = 5;


console.log(solution(isBadVersion)(n));