// Polymorphism means "many forms", and it occurs when we have many classes that are related to each other by inheritance. Inheritance lets us inherit attributes and methods from another class. Polymorphism uses those methods to perform different tasks.

// Create a base class Shape 
class Shape {
   area() {
      console.log('This method should be overridden in subclasses.');
   }
}

// Subclass Square with area
class Square extends Shape {
   constructor(side) {
      super();
      this.side = side;
   }

   area() {
      console.log(`Square area: ${this.side * this.side}`);
   }
}

// Subclass Circle also with area method
class Circle extends Shape {
   constructor(radius) {
      super();
      this.radius = radius;
   }

   area() {
      console.log(`Circle area: ${Math.PI * this.radius * this.radius}`);
   }
}

// Create object of Square and Circle
const square = new Square(5);
const circle = new Circle(3);

// calling the method
square.area(); 
circle.area(); 
