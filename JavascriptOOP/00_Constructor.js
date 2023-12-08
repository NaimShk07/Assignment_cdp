// In JavaScript, a constructor is a special method within a class or a function that is automatically called when an instance of the class or an object is created.

class abc {
   constructor(a, b) {
      this.a = a;
      this.b = b;
   }
   sum() {
      document.write(`sum of a & b are ${this.a + this.b} <br>`);
   }
   multi() {
      document.write(`Multi of a & b are ${this.a * this.b} <br>`);
   }
}
// creating the object of abc class
const obj = new abc(5, 7);

// calling sum and multi method
obj.sum();
obj.multi();
