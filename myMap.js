/* const user = new Map();

user.set(`12`,{ firstName: "Ola", lastName: "Nordmann" });
user.set(`12`,{ firstName: "Ola", lastName: "Nordmann" });
user.set(`50`, { firstName: "Kari", lastName: "Nordmann" });


const values = new Set();

values.add(1);
values.add(2);
values.add(2);
values.add(2);
values.add(3);
values.add(4);

console.log(values.size)
console.log(values.has(1));
console.log(values.has("a"));

for(val of values){
    console.log(val)
}
values.delete(4);
console.log(values.size)
for(val of values){
    console.log(val)
}


let arr = ["ben", "kyl", "gar","joh", "odi", "ste","eil"];
let obj = {"ben":{id:01, "fullName":"Bendik Kvam"} , "kyl":{id:02,"fullName":"kylar Lekven"}}
user.set(4,arr)
user.set(10,obj)
console.log(user)
values.add(arr);
values.add(obj);
console.log(values);*/


class Person{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    speak(){
        console.log(`Hello ${this.firstName} ${this.lastName}`);
    }
}



const nyPerson = new Person("Bendik", "Kvam");


nyPerson.speak();

