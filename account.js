function createBankAccount(initialBalance) {
    let balance = initialBalance;  // The balance is private and cannot be accessed directly
  
    return {
      deposit(amount) {
        if (amount > 0) {
          balance += amount;
          return balance;
        } else {
          return 'Deposit amount must be positive';
        }
      },
      withdraw(amount) {
        if (amount > 0 && amount <= balance) {
          balance -= amount;
          return balance;
        } else if (amount > balance) {
          return 'Insufficient funds';
        } else {
          return 'Withdrawal amount must be positive';
        }
      },
      getBalance() {
        return balance;
      }
    };
  }
  
  // Example Usage:
  const account = createBankAccount(100);
  
  console.log(account.deposit(50)); // Output: 150
  console.log(account.withdraw(30)); // Output: 120
  console.log(account.getBalance()); // Output: 120
  