// 1. Interface yaratish
interface Person {
  name: string;
  age: number;
}

// 2. Interface dan foydalanish
const person1: Person = { name: "Ali", age: 25 };

// 3. Interfacega qo‘shimcha maydon qo‘shish
interface PersonExtended extends Person {
  email?: string;
}

const person2: PersonExtended = { name: "Aziz", age: 30, email: "aziz@example.com" };

// 4. Interface orqali funksiyani belgilash
interface Car {
  brand: string;
  getModel(): string;
}

const myCar: Car = {
  brand: "Toyota",
  getModel() {
    return "Corolla";
  }
};

// 5. Bir nechta interfeyslarni birlashtirish
interface Animal {
  species: string;
}

interface Pet {
  owner: string;
}

interface Dog extends Animal, Pet {
  bark(): void;
}

const myDog: Dog = {
  species: "Canine",
  owner: "John",
  bark() {
    console.log("Woof! Woof!");
  }
};

// 6. Interface dan meros olish
interface Employee extends Person {
  position: string;
}

const employee1: Employee = { name: "Bob", age: 28, position: "Developer" };

// 7. Type va Interface farqi
interface PersonInterface {
  name: string;
  age: number;
}

type PersonType = {
  name: string;
  age: number;
};

const p1: PersonInterface = { name: "Alice", age: 22 };
const p2: PersonType = { name: "David", age: 35 };

// 8. Interface va Class bog‘lanishi
interface User {
  username: string;
  role: string;
}

class Admin implements User {
  username: string;
  role: string;

  constructor(username: string, role: string) {
    this.username = username;
    this.role = role;
  }
}

// 9. Readonly xususiyat ishlatish
interface ReadonlyUser {
  readonly id: number;
  name: string;
}

const user: ReadonlyUser = { id: 1, name: "John" };
// user.id = 2; // Xato, id faqat o‘qilishi mumkin

// 10. Function Type bilan Type va Interface solishtirish
interface AddFn {
  (a: number, b: number): number;
}

type AddType = (a: number, b: number) => number;

const add1: AddFn = (x, y) => x + y;
const add2: AddType = (x, y) => x + y;
