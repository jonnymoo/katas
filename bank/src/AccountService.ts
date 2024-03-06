import { IAccountService } from './IAccountService';
import { IPrinter } from './IPrinter';
import { IDateService } from './IDateService';

class AccountService implements IAccountService{

    constructor(private readonly printer: IPrinter,
      private readonly dateService : IDateService) {};

    deposit(amount: number): void {
      this.printer.log(`Depositing ${amount} on the ${this.formatDateNow()}`);
    }
  
    withdraw(amount: number): void {
      this.printer.log(`Withdrawing ${amount}`);
    }
  
    printStatement(): void {
      this.printer.log(`Printing statement`);
    }

    private formatDateNow(): string {
      const now = this.dateService.getDateNow();
      const day = String(now.getDate()).padStart(2, '0'); 
      const month = String(now.getMonth()).padStart(2, '0');
      const year = now.getFullYear();
      const formattedDate = `${day}/${month}/${year}`;
      return formattedDate;
    }
  }
  
  export { AccountService };