// 1–5: Oddiy massivlar bilan ishlash
let numbers: number[] = [];
numbers.push(10, 20, 30, 40, 50);

let names: string[] = ["Ali", "Vali", "Sami"];

names.push("Karim");

names.pop();

console.log(names.includes("Ali"));

// 6–10: Massiv metodlari bilan ishlash
console.log(numbers.length);

let doubled = numbers.map(n => n * 2);

let positiveNumbers = numbers.filter(n => n > 0);

let sortedNames = names.sort();

let sum = numbers.reduce((acc, curr) => acc + curr, 0);

// 11–15: Tuples (juftliklar) bilan ishlash
let user: [string, number] = ["Ali", 25];

console.log(user[1]);

user = ["Vali", 30];

user.push("Developer");

let [userName, userAge] = user;

// 16–20: Enumlar bilan ishlash
enum Days {
  Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday
}

console.log(Days.Wednesday);

console.log(Object.values(Days));

console.log(Days.Friday.toString());

if (Days.Monday === 0) {
  console.log("Monday is 0");
}
