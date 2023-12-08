//  inheritance is a mechanism where an object can inherit properties and methods from another object, allowing for code reuse.

class Animal {
   constructor(name) {
      this.name = name;
   }
   speak() {
      console.log(`${this.name} makes a sound.`);
   }
}

// cat class extend animal class
class Cat extends Animal {

   constructor(name, breed) {
      // Call the superclass constructor using super
      super(name);
      this.breed = breed;
   }

   meow() {
      console.log(`${this.name} the ${this.breed} says meow.`);
   }
}

// Create an object of the Cat class
const cat = new Cat('Fluffy', 'Persian');
// calling speak and meow methods
cat.speak();
cat.meow();  
