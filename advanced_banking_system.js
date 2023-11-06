/*
    Filename: advanced_banking_system.js

    Description: 
    This code represents an advanced banking system, which includes various functionalities like user authentication, account creation, balance transfer, transaction history, and more. It utilizes object-oriented programming concepts to provide a modular and scalable solution. The code also includes proper error handling and validation techniques for enhanced security. 

    Note: This is a simplified version of a banking system and might not include all the required security measures for a real-world system.

    Author: Your Name
    Date: DD/MM/YYYY
*/

// Constants
const MAX_TRANSACTION_AMOUNT = 10000;
const TRANSACTION_FEE_PERCENTAGE = 1;

// Utility Functions
function formatDate(date) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
}

// User Authentication
class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    authenticate(username, password) {
        return this.username === username && this.password === password;
    }
}

// Bank Account
class BankAccount {
    constructor(ownerName, initialBalance = 0) {
        this.ownerName = ownerName;
        this.balance = initialBalance;
        this.transactions = [];
    }

    deposit(amount) {
        if (amount <= 0) {
            throw new Error('Deposit amount should be greater than zero.');
        }

        this.balance += amount;
        const transaction = {
            type: 'Deposit',
            amount,
            date: new Date()
        };
        this.transactions.push(transaction);
    }

    withdraw(amount) {
        if (amount <= 0) {
            throw new Error('Withdrawal amount should be greater than zero.');
        }

        if (this.balance < amount) {
            throw new Error('Insufficient balance.');
        }

        this.balance -= amount;
        const transaction = {
            type: 'Withdrawal',
            amount,
            date: new Date()
        };
        this.transactions.push(transaction);
    }

    transfer(amount, targetAccount) {
        if (amount <= 0) {
            throw new Error('Transfer amount should be greater than zero.');
        }

        if (this.balance < amount) {
            throw new Error('Insufficient balance.');
        }

        if (amount > MAX_TRANSACTION_AMOUNT) {
            throw new Error('Transfer amount exceeds the maximum transaction limit.');
        }

        this.balance -= amount;
        const transactionFee = (amount * TRANSACTION_FEE_PERCENTAGE) / 100;
        this.balance -= transactionFee;

        targetAccount.deposit(amount);
        const transaction = {
            type: 'Transfer',
            amount,
            targetAccount: targetAccount.ownerName,
            date: new Date()
        };
        this.transactions.push(transaction);
    }

    getTransactionHistory() {
        return this.transactions.map(transaction => {
            return {
                type: transaction.type,
                amount: formatCurrency(transaction.amount),
                date: formatDate(transaction.date),
                targetAccount: transaction.targetAccount || '-'
            };
        });
    }

    getBalance() {
        return formatCurrency(this.balance);
    }
}

// Usage Example
const user = new User('john_doe', 'password123');
const bankAccount = new BankAccount('John Doe');

try {
    // Simple authentication simulation
    const authenticated = user.authenticate('john_doe', 'password123');
    if (!authenticated) {
        throw new Error('Authentication failed.');
    }

    bankAccount.deposit(5000);
    console.log('Balance:', bankAccount.getBalance());

    bankAccount.withdraw(1000);
    console.log('Balance:', bankAccount.getBalance());

    const targetAccount = new BankAccount('Jane Smith');
    bankAccount.transfer(2000, targetAccount);
    console.log('Balance:', bankAccount.getBalance());

    console.log('Transaction History:', bankAccount.getTransactionHistory());
} catch (error) {
    console.error('Error:', error.message);
}