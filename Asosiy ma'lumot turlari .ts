// 1. Primitive Turlar
let username: string;
let age: number;
let isFake: boolean;

// 2. Har Qanday Qiymat Turi (`any`)
let value: any;
value = "Hello";
value = 42;
value = true;

// 3. `unknown` Turi
let unknownValue: unknown = "Some text";
if (typeof unknownValue === "string") {
  console.log(unknownValue.length);
}

// 4. Maxsus Turlar (`null` va `undefined`)
let nullable: null = null;
let undef: undefined = undefined;

// 5. Kombinatsion Turlar (`Union`)
let mixed: string | number;
mixed = "text";
mixed = 100;

// 6. Kesim Turlari (`Intersection`)
type User = { name: string; age: number };
type Employee = { isEmployed: boolean };
type Person = User & Employee;

let person: Person = { name: "Ali", age: 25, isEmployed: true };

// 7. Type Aliases
type ID = string | number;
let userId: ID = "1234";
let orderId: ID = 5678;

// 8. Literal Turlar
type Gender = "male" | "female";
let userGender: Gender = "male";

// 9. Foydalanuvchi Yaratgan Turlar
type ReadonlyUser = { readonly name: string; age: number };
let user: ReadonlyUser = { name: "Bob", age: 30 };
// user.name = "Alice"; // Xato: Readonly xususiyatni o'zgartirib bo'lmaydi

// 10. Generiklar bilan Turlar
function wrap<T>(data: T): T {
  return data;
}

console.log(wrap(42));
console.log(wrap("Hello"));
