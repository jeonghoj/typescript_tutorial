class Human {
    public name: string;
    public age: number;
    public gender: string;
    constructor(name: string, age: number, gender: string){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const jj = new Human("JJ", 27, "male")

const sayHi = (person: Human): string => {
    return `hello ${person.name} ${person.age}, ${person.gender}`
}

console.log(sayHi(jj))
console.log("world")

// gender is optional
// const sayHi = (name : string, age : number, gender? : string) => {
// not error
// sayHi(name,age)


export {};