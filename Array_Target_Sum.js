let nums = [2, 7, 11, 15];

let target = 9; 

function arraySumToTarget(nums, target){
    for(let i = 0; i < nums.length; i++){
        let numOne = nums[i];
        for(let j = 0; j < nums.length; j++){
            if(i == j){
                continue;
            }else{
                let numTwo = nums[j];
                let sum = numOne + numTwo;
                if(sum == target){
                    return [i, j];
                }
            }
        }
    }
}

console.log(arraySumToTarget(nums, target));

nums = [1, 2, -3, 4, 5];
target = 1;

console.log(arraySumToTarget(nums, target));
target = -1; 

console.log(arraySumToTarget(nums, target));