import { IAccountService } from './IAccountService';

class AccountService implements IAccountService{
    deposit(amount: number): void {
      console.log(`Depositing ${amount}`);
    }
  
    withdraw(amount: number): void {
      console.log(`Withdrawing ${amount}`);
    }
  
    printStatement(): void {
      console.log(`Printing statement`);
    }
  }
  
  export { AccountService };