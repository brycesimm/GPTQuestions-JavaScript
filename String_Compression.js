function compressString(string){
    if(string.length === 1){
        return string;
    }
    let count = 1;
    let resultArr = [];
    for(let i = 1; i < string.length; i++){
        if(string[i] !== string[i-1]){
           resultArr.push(string[i-1] + "" + count);
            count = 1;
        }else{
            count++;
        }
    }
    resultArr.push(string[string.length-1] + "" + count);
    let compressed = resultArr.join("");
    return string.length >= compressed.length ? compressed : string;
}

console.log(compressString("aabcccccaaa")); // ✅ a2b1c5a3
console.log(compressString("abc"));         // ✅ abc (compressed is longer)
console.log(compressString("a"));           // ✅ a
console.log(compressString("aa"));          // ✅ a2
console.log(compressString("aabbaa"));      // ✅ a2b2a2