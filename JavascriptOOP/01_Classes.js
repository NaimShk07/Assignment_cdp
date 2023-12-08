// classes provide a blueprint for creating objects with shared properties and methods.

// Define a class Animal
class Animal {
   
   constructor(name) {
     this.name = name;
   }
 
   speak() {
     console.log(`${this.name} makes a sound.`);
   }
 }
 
 // Create an object of the Animal class
 const dog = new Animal('Dog');
 
 // calling speak method
 dog.speak(); 
 