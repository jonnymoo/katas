import { IAccountService } from '../src/IAccountService'; // Assuming IAccountService.ts is in the same directory as your test file
import { AccountService } from '../src/AccountService'; // Assuming src/account.service.ts is the path to your class

describe('AccountService', () => {
    let accountService: IAccountService ; // Declare an instance of the interface
  
    beforeEach(() => {
      accountService = new AccountService(); // Create a new instance of the service
    });
  
    it('should be defined', () => {
      expect(accountService).toBeDefined(); // Checks if the service is defined
    });
  
    // Add more tests for each method:
  
    it('deposit should log a message', () => {
      const spy = jest.spyOn(console, 'log'); // Mock console.log for testing
  
      accountService.deposit(100);
  
      expect(spy).toHaveBeenCalledWith('Depositing 100'); // Verify the logged message
    });
  
  });
  

