var isPalindrome = function(s) {

    
    let s1=s.toLowerCase().split('').filter(c=>{
        return (c>="a" && c<="z" || c>='0' && c<='9')
    }).join('');
    console.log(s1);
    for(let i=0,j=s1.length-1;i<j;i++,j--){
        if(s1[i]!==s1[j]){
    return false;
        }

    }
    return true;
//     function isPalindrome(s) {
//     s = s.toLowerCase();

//     let left = 0;
//     let right = s.length - 1;

//     while (left < right) {
//         // skip non-alphanumeric on left
//         while (left < right && !isAlphaNumeric(s[left])) {
//             left++;
//         }
//         // skip non-alphanumeric on right
//         while (left < right && !isAlphaNumeric(s[right])) {
//             right--;
//         }

//         if (s[left] !== s[right]) {
//             return false;
//         }

//         left++;
//         right--;
//     }

//     return true;
// }

// // helper to check if char is alphanumeric
// function isAlphaNumeric(c) {
//     return (c >= 'a' && c <= 'z') || (c >= '0' && c <= '9');
// }

    

};

let s = "A man, a plan, a canal: Panama";

console.log(isPalindrome(s));