// var person ={
//     name: "khan",
//     age:20,
//     // walk:  function(){
//     //     console.log('person walk');
//     // }
//     walk: () =>{
//         console.log('person walk');
//     },
//     talk(){
//         console.log(this.name + ' talk');
//     }
// }
// person.addr = 'peshawar';
// delete person.age;
// console.log(person)
// person.walk()
// person.talk()


// var person =new Object();
// person.name = 'khan';
// person.age = 24;
// person.walk = function(){
//     console.log('person walk');
// }
// console.log(person);
// person.walk()


// ''''''
// function createperson(name, age){
//     return{
//         name: name,
//         age: age,
//         walk(){
//             console.log('person walk');
//         }
//     }
// }
// var p1 = createperson('khan', 20):
// console.log(p1);


// var book = {
//     title: 'operating system',
//     author: 'khan',
//     edition: '4th',
//     year: '2021',
//     price : '200',
// }
//     // var b = object.keys(book);
//     console.log(book)


// var object=[
//     {
//         id: i,
//         display(){
//             console.log(`id is ${this.id}`);
//         }
//     },
// ]
// for(var o in object){
//     for(var i = 1; i <= 100; i++){
//         object[o].id = i;
//         object[o].display();
//     }
// }

var person = [];
    for (var i=0; i<100; i++){
       person[i] = new Object();
       person[i].id= i;
       person[i].displayId = function(){
           console.log(this.id)
       }
    }
    console.log(person[i]);
    person[i].displayId();

// class Computer{
//     constructor(cpu,ram,storage,price){
//         this.cpu= cpu;
//         this.ram= ram;
//         this.storage = storage;
//         this.price = price;
//     }
//     turnOn()
//     {
//         console.log("computer turn on")
//     }
//     shut_down()
//     {
//         console.log("computer is turn off")
//     }
// }

// class Laptop extends Computer {

//     constructor(cpu,ram,storage,price, model, company, battery){
//         super(cpu,ram,storage,price);
//        this.model = model;
//        this.company = company;
//         this.battery = battery;
//     }
//     showbattery(){
//         console.log(this.battery);
//     }
// }
// var com = new Computer("3GHz", "4GB", "320GB", 40000);
// var lap = new Laptop("hp","8GB", "500GB", 50000, "core15", "hp", "80%");

// console.log(com);
// console.log(lap);

// lap.showbattery();
// com.shut_down();