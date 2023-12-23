// premitive data types
let x = 1
let y = "hello"
let z = true
let a = null
let b = undefined
let c = 34535634546345345234234523523443242n
let d = Symbol("hello")

// non primitive data types

let e = [1, 2, 3, 4, 5]
let f = { name: "hello", age: 23 }
let g = function () {
    console.log("hello")
}


console.log(typeof x) // number
console.log(typeof y) // string
console.log(typeof z) // boolean
console.log(typeof a) // object
console.log(typeof b) // undefined
console.log(typeof c) // bigint
console.log(typeof d) // symbol
console.log(typeof e) // object
console.log(typeof f) // object
console.log(typeof g) // function
