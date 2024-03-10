import { AccountService } from './Banking/AccountService';
import { ConsoleLogPrinter } from './Printer/ConsoleLogPrinter';
import { DateService } from './Utils/DateService';

const printer : ConsoleLogPrinter = new ConsoleLogPrinter(console);
const dateService : DateService = new DateService(new Date(2012,0,10)); // Note 0 indexed months!
const accountService : AccountService = new AccountService(printer, dateService);

console.log("Given a client makes a deposit of 1000 on 10/1/2012");
accountService.deposit(1000);

console.log("And a deposit of 2000 on 13-01-2012");
dateService.updateDateNow(new Date(2012,0,13));
accountService.deposit(2000);

console.log("And a withdrawal of 500 on 14-01-2012");
dateService.updateDateNow(new Date(2012,0,14));
accountService.withdraw(500);

console.log("When they print their bank statement");
console.log("Then they would see:");

accountService.printStatement();