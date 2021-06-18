// Twig Education Test
function twigtest(){
    const ar=[1, 2, 3, 4, 5]; // array
    const add = (a,b) =>a +b; // works out the total of the array
    const sum = (ar.reduce(add) / ar.length) // devides the array by its lenth
        return sum
};
console.log(twigtest()); // calls the function and prints the answer in the oncsole log.


//Maths should be 1 + 2 + 3 + 4 + 5 = 15 
//then devide array length which is 5. 
// 15 / 5 = 3 
