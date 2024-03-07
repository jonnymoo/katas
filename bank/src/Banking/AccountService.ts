import { IAccountService } from './IAccountService';
import { IPrinter } from '../Printer/IPrinter';
import { IDateService } from '../Utils/IDateService';
import { Transaction } from './Transaction';

class AccountService implements IAccountService{

    private statement : Transaction[] = [];

    constructor(private readonly printer: IPrinter,
      private readonly dateService : IDateService) {};

    deposit(amount: number): void {
      const transaction: Transaction = {
        date: this.dateService.getDateNow(),
        amount: amount,
        balance: amount,
      };
      
      this.statement.push(transaction);
    }
  
    withdraw(amount: number): void {
    }
  
    printStatement(): void {
      this.printer.printTable(this.statement)
    }
  }
  
  export { AccountService };