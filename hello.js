//Generics:
var p = { name: 'Nellie', age: 28 };
var MyList = /** @class */ (function () {
    function MyList() {
        this.items = [];
    }
    MyList.prototype.add = function (item) {
        this.items.push(item);
    };
    return MyList;
}());
var myList = new MyList();
myList.add(24);
myList.add(48);
// class MyClass {
//     constructor(private name: string) {
//     }
//     public getName() {
//         return this.name;
//     }
// }
// let myclass = new MyClass('Nellie');
// console.log(myclass.getName());
// class MyClass {
//     constructor(public name: string ) {
//         this.name = name;
//     }
// }
// let myclass = new MyClass('Nellie');
