import { IAccountService } from '../src/IAccountService'; 
import { AccountService } from '../src/AccountService'; 
import { IPrinter } from '../src/IPrinter';

describe('AccountService', () => {

  // A Simple Printer for us to use in our tests
  class SimplePrinter implements IPrinter {
    public Contents: string = '';
    log(message: string): void {
      this.Contents += `${this.Contents ? '\n' : ''}${message}`;
    }
  };


  it('deposit should log a message', () => {

    let printer : SimplePrinter = new SimplePrinter();

      let accountService: IAccountService = new AccountService(printer);
  
      accountService.deposit(100);
  
      expect(printer.Contents).toBe('Depositing 100'); // Verify the logged message
    });
  
  });
  

