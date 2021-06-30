class Parent{
    constructor(){
        this.fatherName = "Ayub";
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }

    getName(){
        return this.name + " " + this.fatherName;
    }
}

const child1 = new Child('Fahad');
const child2 = new Child('Fuad');

console.log(child1.getName());
console.log(child2.getName());