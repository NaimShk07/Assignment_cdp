// Encapsulates data within objects, protecting it from direct access and ensuring integrity.

class BankAccount {
   #balance = 0; // # = private variable

   deposit(amount) {
      this.#balance += amount;
   }

   withdraw(amount) {
      if (this.#balance < amount) {
         throw new Error('Insufficient funds');
      }
      this.#balance -= amount;
   }

   getBalance() { // Public method to access private property indirectly
      return this.#balance;
   }
}

// creating object of class
const account1 = new BankAccount();
account1.deposit(100);
account1.withdraw(50);

console.log(account1.getBalance());