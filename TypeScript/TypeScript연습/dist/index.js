"use strict";
// number
// const app = (a: number, b: number) => {
//   return console.log(a + b);
// };
// app(1, 3);
// const a: number[] = [1, 2, 3];
// array
// const a2: Array<number> = [4, 5, 6];
// tuple
// let a: [number, string];
// a = [1, "Hello"];
// void
// for (let i = 0; i < a.length; i++) {
//   console.log(a[i]);
// }
// const func = (): void => {
//   console.log("void type");
// };
// never
// const showError = (): never => {
//   throw new Error();
// };
// const ifLoof = (): never => {
//   while (true) {
//     console.log("Dont Stop");
//   }
// };
// enum
// enum Os {
//   Window,
//   ios,
//   Android,
// }
// type Score = "A" | "B" | "C" | "D" | "E" | "F";
// interface User {
//   name: string;
//   age: number;
//   gender?: string;
//   readonly birthYear: number;
//   [grade: number]: Score;
// }
// let user: User = {
//   name: "xxx",
//   age: 30,
//   birthYear: 2000,
//   1: "A",
// };
// user.gender = "M";
// console.log(user.name);
// interface Add {
//   (num1: number, num2: number): number;
// }
// const add: Add = (x, y) => {
//   return x * y;
// };
// add(10, 20);
// interface IsAdult {
//   (age: number): boolean;
// }
// const Age: IsAdult = (age) => {
//   return age > 19;
// };
// Age(10);
// console.log(Age(20));
// interface Benz extends Car {
//   door: number;
//   stop(): void;
// }
// const benz: Benz = {
//   color: 'black',
//   wheels: 4,
//   start: () => {
//     console.log("Go!!");
//   },
//   door: 5,
//   stop: () => {
//     console.log("Stop..");
//   },
// };
// console.log(benz);
// class BMW implements Car {
//   color;
//   wheels = 4;
//   constructor(e: string) {
//     this.color = e;
//   }
//   start() {
//     console.log("GO!!");
//   }
// }
// const b = new BMW("RED");
// console.log(b);
// b.start();
// interface Car {
//   color: string;
//   wheels: number;
//   start: void;
// }
// interface Toy {
//   name: string;
// }
// interface ToyCar extends Car, Toy {
//   price: number;
// }
// const toyCar: ToyCar = {
//   color: "white",
//   wheels: 4,
//   start: function () {
//     console
//     log("Go!!");
//   },
//   name: "SuperCar",
//   price: 10000,
// };
// console.log(toyCar);
var n = null;
var a = 123;
