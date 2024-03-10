import { IAccountService } from '../../src/Banking/IAccountService';
import { AccountService } from '../../src/Banking/AccountService';
import { IPrinter } from '../../src/Printer/IPrinter';
import { IDateService } from '../../src/Utils/IDateService'

describe('AccountService', () => {

  // A Simple Printer for us to use in our tests
  class SimplePrinter implements IPrinter {
    printTable(list: any[][]): void {
      this.printedList = list;
    }
    public printedList : any[] = [];
  };

  // A Date Service so we can mock out dates
  class MockDateService implements IDateService {
    constructor(private now: Date) {};
    public getDateNow(): Date { return this.now; };
    public updateDateNow(now: Date): void {this.now = now; }
  }

  it('One deposit test', () => {
    // Given I deposit 100 I expect a transaction history of deposit 100 and a balance of 100    
    let printer: SimplePrinter = new SimplePrinter();
    let dateService : MockDateService = new MockDateService(new Date(2012,0,10)); // 0 Indexed dates! Who knew. https://stackoverflow.com/questions/2552483/why-does-the-month-argument-range-from-0-to-11-in-javascripts-date-constructor

    let accountService: IAccountService = new AccountService(printer, dateService);

    accountService.deposit(100);
    accountService.printStatement();

    let statement: any = printer.printedList;
    expect(statement[0].date.getFullYear()).toBe(2012);
    expect(statement[0].date.getMonth()).toBe(0);
    expect(statement[0].date.getDate()).toBe(10);
    expect(statement[0].amount).toBe(100);
    expect(statement[0].balance).toStrictEqual(100);
  });

  it('two deposit test', () => {
    // Given I deposit 100 then 200 I expect a two transaction histories and a balance of 300    
    let printer: SimplePrinter = new SimplePrinter();
    let dateService : MockDateService = new MockDateService(new Date(2012,0,10)); // 0 Indexed dates! Who knew. https://stackoverflow.com/questions/2552483/why-does-the-month-argument-range-from-0-to-11-in-javascripts-date-constructor

    let accountService: IAccountService = new AccountService(printer, dateService);

    accountService.deposit(100);
    dateService.updateDateNow(new Date(2012,0,11));
    accountService.deposit(200);
    accountService.printStatement();

    let statement: any = printer.printedList;
    expect(statement[0].date.getFullYear()).toBe(2012);
    expect(statement[0].date.getMonth()).toBe(0);
    expect(statement[0].date.getDate()).toBe(10);
    expect(statement[0].amount).toBe(100);
    expect(statement[0].balance).toStrictEqual(100);

    expect(statement[1].date.getFullYear()).toBe(2012);
    expect(statement[1].date.getMonth()).toBe(0);
    expect(statement[1].date.getDate()).toBe(11);
    expect(statement[1].amount).toBe(200);
    expect(statement[1].balance).toStrictEqual(300);
  });

});


