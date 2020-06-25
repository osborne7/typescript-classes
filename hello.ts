


//Generics:

let p : IPerson = { name: 'Nellie', age: 28 };

class MyList<T> {
    public items: Array<T> = [];

    public add(item: T) {
        this.items.push(item);
    }
}

let myList = new MyList<number>();

myList.add(24);
myList.add(48);

interface IPerson {
    name: string;
    age: number;
}

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