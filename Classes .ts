// 1. Oddiy Class Yaratish
class Car {
  brand: string;
  year: number;

  constructor(brand: string, year: number) {
    this.brand = brand;
    this.year = year;
  }
}
let myCar = new Car("Toyota", 2022);

// 2. Konstruktor Qo‘shish
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
let person1 = new Person("Ali", 25);

// 3. Method Qo‘shish
class Rectangle {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return this.width * this.height;
  }
}

// 4. Private Xususiyatlardan Foydalanish
class BankAccount {
  private balance: number = 0;

  deposit(amount: number) {
    this.balance += amount;
  }

  getBalance(): number {
    return this.balance;
  }
}

// 5. Getter va Setter Methodlari
class User {
  private _username: string;

  constructor(username: string) {
    this._username = username;
  }

  get username(): string {
    return this._username;
  }

  set username(newName: string) {
    this._username = newName;
  }
}

// 6. Statik Xususiyat Qo‘shish
class MathUtils {
  static PI: number = 3.1416;

  static circleArea(radius: number): number {
    return this.PI * radius * radius;
  }
}

// 7. Ko‘p Obyektlar Yaratish
class Product {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}
let product1 = new Product("Phone", 500);
let product2 = new Product("Laptop", 1200);

// 8. Method Bilan Oddiy Hisoblash
class Calculator {
  add(a: number, b: number): number {
    return a + b;
  }
}

// 9. To‘liq Ismni Qaytaruvchi Method
class FullNamePerson {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

// 10. Do‘kon Savatchasi (Shopping Cart)
class ShoppingCart {
  private items: string[] = [];

  addItem(item: string) {
    this.items.push(item);
  }

  getItems(): string[] {
    return this.items;
  }
}
