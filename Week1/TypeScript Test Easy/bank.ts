export class ValueError extends Error {
    constructor(message: string = 'Bank account error') {
      super(message);
    }
  }
  
  export class BankAccount {
    private _balance: number;
    private _isOpen: boolean;
  
    constructor() {
      this._balance = 0;
      this._isOpen = false;
    }
  
    open(): void {
      if (this._isOpen) {
        throw new ValueError('Account is already open');
      }
      this._isOpen = true;
    }
  
    close(): void {
      if (!this._isOpen) {
        throw new ValueError('Account is already closed');
      }
      this._isOpen = false;
      this._balance = 0;
    }
  
    deposit(amount: number): void {
      if (!this._isOpen) {
        throw new ValueError('Cannot deposit into a closed account');
      }
      if (amount <= 0) {
        throw new ValueError('Deposit amount must be greater than zero');
      }
      this._balance += amount;
    }
  
    withdraw(amount: number): void {
      if (!this._isOpen) {
        throw new ValueError('Cannot withdraw from a closed account');
      }
      if (amount <= 0) {
        throw new ValueError('Withdrawal amount must be greater than zero');
      }
      if (amount > this._balance) {
        throw new ValueError('Insufficient funds');
      }
      this._balance -= amount;
    }
  
    get balance(): number {
      if (!this._isOpen) {
        throw new ValueError('Account is closed');
      }
      return this._balance;
    }
  }