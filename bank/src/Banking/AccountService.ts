import { IAccountService } from './IAccountService';
import { IPrinter } from '../Printer/IPrinter';
import { IDateService } from '../Utils/IDateService';
import { Transaction } from './Transaction';

class AccountService implements IAccountService{

    private statement : Transaction[] = [];

    constructor(private readonly printer: IPrinter,
      private readonly dateService : IDateService) {};

    deposit(amount: number): void {
      // Create a transaction. The balance is calculated as the last balanace + the amount deposited
      const transaction: Transaction = {
        date: this.dateService.getDateNow(),
        amount: amount,
        balance: this.statement.length === 0 ? amount : this.statement[this.statement.length - 1].balance + amount
      };
      
      this.statement.push(transaction);
    }
  
    withdraw(amount: number): void {
      // Assume a withdraw is a negative deposit - note we don't check any negative balance currently
      this.deposit(amount * -1);
    }
  
    printStatement(): void {
      this.printer.printTable(this.statement)
    }
  }
  
  export { AccountService };