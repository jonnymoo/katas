export interface IAccountService {
    deposit(amount: number): void;
    withdraw(amount: number): void;
    printStatement(): void;
  }