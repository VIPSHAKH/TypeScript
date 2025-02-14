// 1-5: Public bilan ishlash
class Person {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

class Car {
  public model: string;
  constructor(model: string) {
    this.model = model;
  }
  displayModel() {
    console.log(`Car model: ${this.model}`);
  }
}

class Student {
  public age: number;
  constructor(age: number) {
    this.age = age;
  }
}

class Book {
  public title: string;
  public author: string;
  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }
}

class Product {
  public price: number;
  constructor(price: number) {
    this.price = price;
  }
}

// 6-10: Private bilan ishlash
class BankAccount {
  private balance: number = 0;
  deposit(amount: number) {
    this.balance += amount;
  }
  getBalance() {
    return this.balance;
  }
}

class User {
  private password: string;
  constructor(password: string) {
    this.password = password;
  }
  checkPassword(input: string) {
    return this.password === input;
  }
}

class Secret {
  private code: string;
  constructor(code: string) {
    this.code = code;
  }
}

class Safe {
  private pin: number;
  constructor(pin: number) {
    this.pin = pin;
  }
  unlock(input: number) {
    console.log(input === this.pin ? "Unlocked" : "Wrong PIN");
  }
}

class EmailAccount {
  private inbox: string[] = [];
  receiveEmail(email: string) {
    this.inbox.push(email);
  }
  readEmails() {
    return this.inbox;
  }
}

// 11-13: Protected bilan ishlash
class Animal {
  protected name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Dog extends Animal {
  bark() {
    console.log(`${this.name} says: Woof!`);
  }
}

class Employee {
  protected salary: number;
  constructor(salary: number) {
    this.salary = salary;
  }
}

class Manager extends Employee {
  showSalary() {
    console.log(`Salary: ${this.salary}`);
  }
}

class Vehicle {
  protected speed: number = 0;
}

class Car2 extends Vehicle {
  accelerate(amount: number) {
    this.speed += amount;
    console.log(`Speed: ${this.speed}`);
  }
}

// 14-15: Readonly bilan ishlash
class Country {
  readonly name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Company {
  readonly registrationNumber: string;
  constructor(registrationNumber: string) {
    this.registrationNumber = registrationNumber;
  }
}
