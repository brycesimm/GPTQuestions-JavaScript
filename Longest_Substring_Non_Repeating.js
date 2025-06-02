// This brute force algorithm solves in O(n^3). It compiles all possible 
// substrings of s and checks if each character after is within it; if not,
// add it to the substring. Else, update the maxSub variable if needed.
function longestSubstringBruteForce(s){
    let maxSub = "";
    for(let i = 0; i < s.length; i++){
        let substring = s[i];
        for(let j = i + 1; j < s.length; j++){
            if(!substring.includes(s[j])){
                substring += s[j];
            }
            else{
                maxSub = substring.length > maxSub.length ? substring : maxSub;
                break;
            }
        }
        maxSub = substring.length > maxSub.length ? substring : maxSub;
    }
    return maxSub;
}

console.log(longestSubstringBruteForce("aabbbcab")); // bca
console.log(longestSubstringBruteForce("abcabcbb")); // abc
console.log(longestSubstringBruteForce("bbbbb")); // b
console.log(longestSubstringBruteForce("pwwkew")); // wke
console.log(longestSubstringBruteForce("abcde")); // abcde

// This solution uses the Sliding Window Pattern, where the window is dictated
// by variables "start" and "end", being updated dynamically as we encounter 
// new characters and duplicates. It executes in O(n)
function longestSubstringOptimal(s){
    // The set is used to check for duplicates
    let set = new Set();
    // start and end track the current substring of s being processed
    let start = 0;
    let end = 0;
    let longest = "";
    for(let i = 0; i < s.length; i++){
        let currentChar = s[i];
        // when a character is not a duplicate, we add it to the set and update
        // the "end" variable
        if(!set.has(currentChar)){
            set.add(currentChar);
            end++;
        }else{
            // When a duplicate is found, we make sure to check the 
            // substring tracked by s[start] to s[end] (s.substring(start, end)) to update
            // the "longest" variable if needed
            longest = longest.length > (end - start) ? longest : s.substring(start, end);
            // Then, we move the "start" variable up to the 
            // point that the duplicate was encountered ("end") and delete all of those values
            // in the set
            while(start !== end){
                set.delete(s[start]);
                start++;
            }
            // Now that start == end, we need to add the once-duplicate character and push end
            // back one.
            set.add(currentChar);
            end++;
            // Then we start constructing a new substring from s[start] to s[end] once more
        }
    }
    // We have one final check at the end to catch cases when the else 
    // condition isn't triggered; to make sure we have the latest substring to check.
    longest = longest.length > (end - start) ? longest : s.substring(start, end);
    return longest;
}

console.log(longestSubstringOptimal("aabbbcab")); // bca
console.log(longestSubstringOptimal("abcabcbb")); // abc
console.log(longestSubstringOptimal("bbbbb")); // b
console.log(longestSubstringOptimal("pwwkew")); // wke
console.log(longestSubstringOptimal("abcde")); // abcde