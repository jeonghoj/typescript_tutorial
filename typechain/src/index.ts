const name = "jj", age = 27, gender = "male";


const sayHi = (name : string, age : number, gender : string): string => {
    return `hello ${name} ${age}, ${gender}`
}

console.log(sayHi(name,age,gender))
console.log("world")

// gender is optional
// const sayHi = (name : string, age : number, gender? : string) => {
// not error
// sayHi(name,age)


export {};