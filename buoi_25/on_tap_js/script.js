// const sum = (a = 0, b =) => {
//  return a+b;
// };

// console.log(sum(10)); 

//spread syntax
    // const arr1 = [1, 2, 3];
    // const arr2 = [4, 5, 6];
    // const arr3 = [1, 2, 3, 4, 5, 6];
    // const arr4 = [...arr1, ...arr2];

    // console.log(...arr1); 
    // console.log(...arr2);
    // console.log(arr3);
    // console.log(arr4);
//end speard syntax

// rest parameters
    const sum = (...numbers) => {
        console.log(numbers);
        const result = numbers.reduce((total, item) => {
            return total + item;
        },0);
        return result;
    }

    console.log(sum(10, 10, 20, 30, 40, 50));

// end rest parameters

//Destructuring
    

//End Destructuring