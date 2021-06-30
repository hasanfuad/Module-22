class Person{
    constructor(pName, pAge, pThana, pWeight){
        this.name = pName;
        this.age = pAge;
        this.thana = pThana;
        this.weight = pWeight;
    }
}

const person = new Person('Fuad', 25, 'Hathazari', 80);
const person2 = new Person('Tariq', 26, 'Rajshahi', 59);
const person3 = new Person('Hasib', 24, "Tangail", 78);

console.log(person, person2, person3);