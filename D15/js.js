class Animal{
    constructor(name, age, color, legs){
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
    }
    static getInfo(){
        return 'this is animal static method'
    }
    
}

class Dog extends Animal{
    constructor(){
        super(name, age, color, legs)
    }
    static getInfo(){
        return 'this is dog static method'
    }
}

let Animal1 = new Animal('aaaa', 1, 'yellow', 4)
console.log(Animal.getInfo())
console.log(Dog.getInfo());