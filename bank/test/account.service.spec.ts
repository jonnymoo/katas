import { IAccountService } from '../src/IAccountService';
import { AccountService } from '../src/AccountService';
import { IPrinter } from '../src/IPrinter';
import { IDateService } from '../src/IDateService'

describe('AccountService', () => {

  // A Simple Printer for us to use in our tests
  class SimplePrinter implements IPrinter {
    private contents: string = '';
    log(message: string): void {
      this.contents += `${this.contents ? '\n' : ''}${message}`;
    }
    pop(): string {
      let ret : string = this.contents;
      this. contents = '';
      return ret;
    }
  };

  // A Date Service so we can mock out dates
  class MockDateService implements IDateService {
    constructor(private readonly now: Date) {};
    getDateNow(): Date { return this.now; };
  }

  it('deposit should log a message with a date', () => {

    let printer: SimplePrinter = new SimplePrinter();
    let dateService : MockDateService = new MockDateService(new Date(2012,1,10));

    let accountService: IAccountService = new AccountService(printer, dateService);

    accountService.deposit(100);

    expect(printer.pop()).toBe('Depositing 100 on the 10/01/2012');
  });

});


