import { IAccountService } from './IAccountService';
import { IPrinter } from './IPrinter';

class AccountService implements IAccountService{

    constructor(private readonly printer: IPrinter) {};

    deposit(amount: number): void {
      this.printer.log(`Depositing ${amount}`);
    }
  
    withdraw(amount: number): void {
      this.printer.log(`Withdrawing ${amount}`);
    }
  
    printStatement(): void {
      this.printer.log(`Printing statement`);
    }
  }
  
  export { AccountService };