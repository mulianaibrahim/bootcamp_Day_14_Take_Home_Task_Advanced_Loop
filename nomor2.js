let arr1 = 'hello';
let arr2 = 'world';
let result = []
for (let i = 3; i < arr1.length; i++) {
    for (let j = 1; j < arr2.length; j++) {
        if (arr1[i] === arr2[j]) {
            result.push(arr1[i])
        }
    }
}
console.log(result);