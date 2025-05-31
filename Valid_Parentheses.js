function isBalanced(s){
    const pairs = {
        '[' : ']',
        '(' : ')',
        '{' : '}'
    }
    if(s.length % 2 !== 0)
        return 'NO';
    let stack = [];
    let array = [...s];
    for(let i = 0; i< array.length; i++){
        let bracket = array[i];
        if(bracket === '[' || bracket === '(' || bracket === '{'){
            stack.push(bracket);
        }else{
            let lastBracket = stack.pop();
            if(bracket !== pairs[lastBracket])
                return 'NO';
        }
    }
    if(stack.length == 0)
        return 'YES';

    return 'NO';
}

let input = `{[(])}`;
console.log(isBalanced(input)); // NO
input = `{(([])[])[]}`;
console.log(isBalanced(input)); // YES
input = `{(([])[])[]]}`;
console.log(isBalanced(input)); // NO
input = `{(([])[])[]}[]`;
console.log(isBalanced(input)); // YES
input = `[()][{}()][](){}([{}(())([[{}]])][])[]([][])(){}{{}{[](){}}}()[]({})[{}{{}([{}][])}]`;
console.log(isBalanced(input)); // YES
input = `{{}(`;
console.log(isBalanced(input)); // NO