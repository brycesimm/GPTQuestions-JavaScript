let nums = [2, 7, 11, 15];

let target = 9; 

function arraySumToTarget(nums, target){
    let numsMap = new Map();
    //storing as nums[i], i lets us get the numbers' index values via the numbers as a key
    for(let i = 0; i < nums.length; i++){
        numsMap.set(nums[i], i);
    }
    // check if map has the complement target - nums[i] and get its index
    for(let i = 0; i < nums.length; i++){
        if(numsMap.has(target - nums[i])){
            let complement = numsMap.get(target - nums[i]);
            if(complement != i){
                return [complement, i];
            }
            else{
                continue;
            }
        }
    }
}

// we can make this solution even better if we set the elements in every iteration of the 
// for loop rather than doing two separate loops. That will also eliminate the need to check
// that complement != i so we don't reuse the same element. 

console.log(arraySumToTarget(nums, target));

nums = [1, 2, -3, 4, 5];
target = 1;

console.log(arraySumToTarget(nums, target));
target = -1; 

console.log(arraySumToTarget(nums, target));

nums = [1, 2, 3, 4, 5];
target = 6;

console.log(arraySumToTarget(nums, target));
