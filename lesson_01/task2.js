function countVowels(str) {
    let arr = str.split('');
    let arrVowels = ['a', 'e', 'o', 'u', 'i', 'y'];
    let summ = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j <= arrVowels.length; j++) {
            if (arr[i] === arrVowels[j]) {

                summ += 1;
            
            }
            console.log(arr[i] === arrVowels[j]);
            
        }
    }
    return summ;
 }
console.log(countVowels("Hello World")); // 3 (e, o, o)

