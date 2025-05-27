function sum(a: number, b: number): undefined | number {
    try {
        return a + b;   
    } catch (error) {
        console.log(a + b);
        
    }
    

}
console.log(sum(2, 4));
