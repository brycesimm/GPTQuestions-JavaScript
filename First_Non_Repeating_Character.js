function findNonRepeating(string){
    let map = new Map();
    for(let i = 0; i < string.length; i++){
        if(map.get(string[i])){
            map.set(string[i], map.get(string[i]) + 1)
        }else{
            map.set(string[i], 1);
        }
    }
    for(let [key, value] of map){
        if(value == 1){
            return key;
        }
    }
    return "No non-repeating characters found";
}

let input = 'aab';
console.log(findNonRepeating(input)); // b
input = '';
console.log(findNonRepeating(input)); // "No non-repeating characters found"
input = 'abb';
console.log(findNonRepeating(input)); // a
input = 'aaaaaa';
console.log(findNonRepeating(input)); // "No non-repeating characters found"
input = 'aabcb';
console.log(findNonRepeating(input)); // c