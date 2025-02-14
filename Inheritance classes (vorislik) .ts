// 1. Oddiy klass yaratish
class Animal {
  name: string;
  age: number;
  static speciesCount = 0;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    Animal.speciesCount++;
  }

  static getSpeciesCount(): number {
    return this.speciesCount;
  }
}

// 2. Meros olish (Inheritance)
class Dog extends Animal {
  protected species: string = "Dog";

  constructor(name: string, age: number) {
    super(name, age);
  }

  bark(): void {
    console.log("Woof! Woof!");
  }

  fetch(): void {
    console.log("The dog is fetching the ball");
  }
}

// 3. Super kalit so‘zi ishlatilgan
class Cat extends Animal {
  protected species: string = "Cat";

  constructor(name: string, age: number) {
    super(name, age);
  }

  meow(): void {
    console.log("The cat says Meow!");
  }
}

// 10. Klass obyektlaridan foydalanish
let dog1 = new Dog("Rex", 3);
dog1.bark();
dog1.fetch();

let cat1 = new Cat("Whiskers", 2);
cat1.meow();

console.log("Total species count:", Animal.getSpeciesCount());
