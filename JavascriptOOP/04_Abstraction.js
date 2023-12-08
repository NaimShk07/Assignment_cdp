// An abstraction is a way of hiding the implementation details and showing only the functionality to the users.

//Creating a constructor function  
class Vehicle {
   Vehicle() {
      this.vehicleName = vehicleName;
      throw new Error("You cannot create an instance of Abstract class");
   }
   display() {
      return this.vehicleName;
   }
}

const vehicle = new Vehicle(); 
// vehicle.display();
