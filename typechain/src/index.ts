
interface Human {
    name: string;
    age: number;
    gender: string;
}

const person = {
    name: "jj",
    age: 27,
    gender: "male"
}

const sayHi = (person: Human): string => {
    return `hello ${person.name} ${person.age}, ${person.gender}`
}

console.log(sayHi(person))
console.log("world")

// gender is optional
// const sayHi = (name : string, age : number, gender? : string) => {
// not error
// sayHi(name,age)


export {};