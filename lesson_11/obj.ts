type TypeObj = {
    a: number;
    b: number;
}

interface IFirst {
    a: number;
    // b: number;
}
interface ISecond extends IFirst{
    b: number;
}
function sum({ a, b}: TypeObj): number | void {
    try {
        return a + b;  
    } catch (error) {
        console.log(a + b);
        
    }
}
// console.log(sum({a: 2, b: 4}));

function multi({a, b}: ISecond): number | void {
    try {
        return a * b;
    } catch (error) {
        console.log(a * b);
        
    }
}
// console.log(multi({a: 2, b: 4}));


