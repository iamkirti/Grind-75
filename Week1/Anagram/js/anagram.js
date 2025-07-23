/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length!==t.length)return false;

    let charMap=new Map();
    

    for(let i=0;i<s.length;i++){
        if(charMap.has(s[i])){
            charMap.set(s[i],charMap.get(s[i])+1);

        }else{
            charMap.set(s[i],1)
        }


    }
    for(let i=0;i<t.length;i++){
        if(!charMap.has(t[i])){
            return false;
        }
        if(charMap.has(t[i])){
             charMap.set(t[i],charMap.get(t[i])-1);

            
        }
if (charMap.get(t[i]) < 0) return false;
    }
    
    return true;
    
};

let s = "anagram", t = "nagaram";
console.log(isAnagram(s,t));