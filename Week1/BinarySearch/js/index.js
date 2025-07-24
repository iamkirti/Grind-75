/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
let beg=0;
let last=nums.length-1;
let mid=0;
    while(beg<=last){
        mid=(beg+last)/2;
        if(target===nums[mid]){
            return mid;
        }else if(target>nums[mid]){
            beg=mid+1;
            
        }else{
            last=mid-1;
        }

    }
    return -1;
}

let nums = [-1,0,3,5,9,12];
let target = 9;
console.log(search(nums,target));