
let arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(`Here you can see the array ${arr}`);
// Push 
// Adds one or more elements to the end of an array and returns the new length of the array.

arr.push(10);
console.log(`here you can see the array has 10 added ${arr}`);

// Pop
// Removes the last element from an array and returns it.
arr.pop();
console.log(`here you can see the array has last element that is 10 removed ${arr}`);

// Shift
// Removes the first element from an array and returns it.
arr.shift();
console.log(`here you can see the array has 1st element that is 1 removed ${arr}`);

// Unshift
// Adds one or more elements to the front of an array and returns the new length of the array.
arr.unshift(1);
console.log(`Here you can see the arr has 1 back ${arr}`);

// concat
// Returns a new array comprised of this array joined with other array(s) and/or value(s).
let arr2: number[] = [10, 11, 12, 13, 14];
let arr3: number[] = arr.concat(arr2);
console.log(`Here you can see the arr and arr2 are added and the result is  ${arr3}`);

// join
// Joins all elements of an array into a string.
let str: string = arr3.join("-");
console.log(`Here you can see the arr3 is converted to string ${str}`);

// slice
// Extracts a section of an array and returns a new array.
let arr4: number[] = arr3.slice(2, 5);
console.log(`Here you can see the arr3 is sliced and the result is ${arr4}`);

// indexOf
// Returns the first (least) index of an element within the array equal to the specified value, or -1 if none is found.
let index: number = arr3.indexOf(11);
console.log(`Here you can see the index of 11 is ${index}`);

// includes
// Determines whether an array contains a certain element, returning true or false as appropriate.
let isPresent: boolean = arr3.includes(11);
console.log(`Here you can see the 11 is present or not ${isPresent}`);

//find  
//Returns the found value in the array, if an element in the array satisfies the provided testing function or undefined if not found.

let found: number|undefined = arr3.find((element) => element === 11);
console.log(`Here you can see the found value is ${found}`);

//find 
//Returns the found value in the array, if an element in the array satisfies the provided testing function or undefined if not found.

let foundIndex: number | undefined= arr3.find((element) => element === 19);
console.log(`Here you can see the found index is ${foundIndex}`);

//findIndex
//Returns the found index in the array, if an element in the array satisfies the provided testing function or -1 if not found.

let foundIndex2: number = arr3.findIndex((element) => element === 41);
console.log(`Here you can see the found index is ${foundIndex2}`);


//findIndex
//Returns the found index in the array, if an element in the array satisfies the provided testing function or -1 if not found.

let foundIndex3: number | undefined = arr3.findIndex((element) => element === 11);
console.log(`Here you can see the found index is ${foundIndex3}`);


//map
//Creates a new array with the results of calling a provided function on every element in this array.

let mappedArray: number[] = arr3.map((element) => element * 2);
console.log(`Here you can see the mapped array is ${mappedArray}`);