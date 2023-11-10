// ********* class ********* 

class abc {
   demo() {
      document.write('hello');
   }
}
var obj = new abc;
obj.demo();

// ********* contstructor *********

class Person {
   constructor(name, age) {
      this.name = name;
      this.age = age;
   }
}

var obj = new abc("johnnn", 30);


// ********* inheritance *********

class Student extends Person {
   constructor(name, age, grade) {
      super(name, age);
      this.grade = grade;
   }
}

// ********* polymorphism *********

class A {
   display() {
      document.writeln("A is invoked<br>");
   }
}
class B extends A {
   display() {

      document.writeln("B is invoked");
   }
}

var a = [new A(), new B()];
a.forEach(function (msg) {
   msg.display();
});  