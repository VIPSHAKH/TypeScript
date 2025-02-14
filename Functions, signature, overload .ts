// 1. Funksiya yaratish
function hello(): void {
  console.log("Salom!");
}

// 2. Funksiya argument bilan
function greet(name: string): void {
  console.log(`Salom, ${name}!`);
}

// 3. Son qaytaruvchi funksiya
function getNumber(): number {
  return 10;
}

// 4. Ikki sonni qo‘shish
function add(a: number, b: number): number {
  return a + b;
}

// 5. Sonni kvadratga oshirish
function square(n: number): number {
  return n * n;
}

// 6. Funksiya string qaytarsin
function getMessage(): string {
  return "Bu TypeScript darsi";
}

// 7. Boolean qaytaruvchi funksiya
function isEven(n: number): boolean {
  return n % 2 === 0;
}

// 8. Uch sonning o‘rtacha qiymatini hisoblash
function average(a: number, b: number, c: number): number {
  return (a + b + c) / 3;
}

// 9. Matn uzunligini topish
function getLength(text: string): number {
  return text.length;
}

// 10. Funksiya orqali matnni katta harfga o‘tkazish
function toUpperCaseText(text: string): string {
  return text.toUpperCase();
}
