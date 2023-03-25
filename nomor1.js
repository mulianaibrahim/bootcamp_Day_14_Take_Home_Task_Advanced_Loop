const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const batas = [17];
for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < batas.length; j++) {
       console.log(`${arr1[i]} + ${batas[j]}`);
    }
}