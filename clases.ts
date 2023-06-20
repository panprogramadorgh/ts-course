// // narrowing con clases `instanceof operator`

// class Poligon {
//   constructor(
//     readonly name: string,
//     readonly color: string,
//     protected sides: number
//   ) {}
// }

// class Rectangle extends Poligon {
//   constructor(
//     name: string,
//     color: string,
//     readonly xSideSize: number,
//     readonly ySideSize: number
//   ) {
//     super(name, color, 4);
//   }
// }

// class Prisma extends Rectangle {
//   constructor(
//     name: string,
//     color: string,
//     xSideSize: number,
//     ySideSize: number,
//     readonly zSideSize: number
//   ) {
//     super(name, color, xSideSize, ySideSize);
//     this.sides = 6;
//   }
// }

// type instance = Prisma | Rectangle | Poligon;
// function narrowingMessages(instance: instance): void {
//   if (instance instanceof Prisma) {
//     console.log(`${instance.name} es un Prisma`);
//   } else if (instance instanceof Rectangle) {
//     console.log(`${instance.name} es un Rectangulo`);
//   } else if (instance instanceof Poligon) {
//     console.log(`${instance.name} es un Poligono generico`);
//   } else {
//     console.log(
//       "El compilador de ts no sabe el tipo, por lo tanto, le asigna automaticamente el tipo never"
//     );
//   }
// }

// const myPrisma: Prisma = new Prisma("MyPrisma", "red", 2, 2, 2);
// const myRectangle: Rectangle = new Rectangle("MyRectangle", "blue", 2, 2);
// const myPoligon: Poligon = new Poligon("MyPoligon", "green", 4);

// narrowingMessages(new Rectangle("MyRectangle", "blue", 2, 2));

// // clases con interfaces (indican las propiedades obligatorias a tener una clase con sus respectivos tipos) example 1

// interface BasicPersonInfo {
//   readonly name: string;
//   readonly age: number;
//   readonly surname: string;
// }

// interface PersonMethods {
//   delete: () => void;
//   updateBasicInfo: (newValues: BasicPersonInfo) => void;
// }

// // interface PersonInterface extends BasicPersonInfo, PersonMethods {}

// class Person implements PersonInterface {
//   name: string;
//   age: number;
//   surname: string;

//   delete(): void {
//     this.deleted = true;
//     this.deletedAt = new Date();
//   }
//   updateBasicInfo({ name, surname, age }: BasicPersonInfo): void {
//     this.name = name;
//     this.surname = surname;
//     this.age = age;
//   }

//   protected deleted: boolean = false;
//   protected createdAt: Date = new Date();
//   protected updatedAt: Date = new Date();
//   protected deletedAt?: Date;
//   constructor(name: string, surname: string, age: number) {
//     this.name = name;
//     this.surname = surname;
//     this.age = age;
//   }
// }

// const firstPerson: Person = new Person("Alvaro", "Barrero", 15);
// firstPerson.updateBasicInfo({ name: "Sleepy", surname: "Joe", age: 55 });
// firstPerson.delete();
// console.log(firstPerson);

// // example 2 (indican las propiedades obligatorias a tener una clase con sus respectivos tipos mediante interfaz)

// interface BasicPersonInfo {
//   readonly name: string;
//   readonly surname: string;
//   readonly age: number;
// }

// class PersonProto implements BasicPersonInfo {
//   name: string = "Alvaro";
//   surname: string = "Barrero";
//   age: number = 3;
//   protected greet = (username: string) => console.log(`Hello ${username}`);
// }

// class Person extends PersonProto {
//   constructor() {
//     super();
//     this.greet("Alvaro");
//   }
// }

// const p1: Person = new Person();

// // example 3 (indican las propiedades obligatorias a tener una clase con sus respectivos tipos mediante henencia de clases)

// class PersonProto {
//   constructor(
//     protected name: string,
//     protected surname: string,
//     protected age: number
//   ) {}
//   protected greet(username: string) {
//     console.log(`Hello ${username}`);
//   }
// }

// class Person extends PersonProto {
//   constructor(name: string, surname: string, age: number) {
//     super(name, surname, age);
//     this.callGreet();
//   }

//   callGreet() {
//     this.greet("Alvaro");
//   }
// }

// new Person("Alvaro", "Barrero", 15).callGreet()
