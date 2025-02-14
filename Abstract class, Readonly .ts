// 1. Abstract class yaratish
abstract class Vehicle {
  abstract move(): void;
}

// 2. Abstract classdan meros olish
class Car extends Vehicle {
  move() {
    console.log("The car is moving");
  }
}

// 3. Abstract klassda protected maydon ishlatish
abstract class Animal {
  protected species: string;
  constructor(species: string) {
    this.species = species;
  }
}

// 4. Abstract klassda constructor ishlatish
abstract class Person {
  constructor(public name: string) {}
}

// 5. Readonly bilan class maydonini yaratish
class User {
  readonly id: number;
  constructor(id: number) {
    this.id = id;
  }
}

// 6. Readonly interfeysda ishlatish
interface Product {
  readonly id: number;
  name: string;
}

const item: Product = { id: 1, name: "Laptop" };
// item.id = 2; // Xato: readonly maydonni o'zgartirib bo'lmaydi

// 7. Abstract klassda readonly maydon ishlatish
abstract class Employee {
  readonly employeeId: number;
  constructor(employeeId: number) {
    this.employeeId = employeeId;
  }
}

// 8. ReadonlyArray yaratish
const numbers: ReadonlyArray<number> = [1, 2, 3];
// numbers.push(4); // Xato: ReadonlyArray o'zgartirib bo'lmaydi

// 9. Abstract klassda abstrakt va oddiy metodni birga ishlatish
abstract class Device {
  abstract turnOn(): void;
  turnOff() {
    console.log("The device is turned off");
  }
}

// 10. Abstract klassdan foydalanib obyekt yaratish
abstract class Shape {
  abstract getArea(): number;
}

class Circle extends Shape {
  constructor(public radius: number) {
    super();
  }
  getArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

const circle = new Circle(5);
console.log(circle.getArea());
