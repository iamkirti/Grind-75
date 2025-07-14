var isPalindrome = function(s) {

    
    let s1=s.toLowerCase().split('').filter(c=>{
        return (c>="a" && c<="z" || c>='0' && c<='9')
    }).join('');
    console.log(s1);
    for(let i=0,j=s1.length-1;i<s1.length;i++,j--){
        if(s1[i]!==s1[j]){
    return false;
        }

    }
    return true;
    //console.log(s)
    // let s2="";
    // for (const element of s1) {
    //     if(element>="a" && element<="z" || element>=0 && element<=9)
    //         s2=s2.concat(element);
        
    // }
   //console.log(s2)
    

};

let s = "A man, a plan, a canal: Panama";

console.log(isPalindrome(s));