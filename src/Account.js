class Account {

    #balance;
    #name;
    #transactions = [];

    constructor(name, balance = 0) {
        this.#balance = this.checkBalance(balance);
        this.#name = this.checkName(name);
    }

    getName() {
        return this.#name;
    }
    
    getBalance() {
        return this.#balance;
    }

    getTransactions() {
        return this.#transactions;
    }

    checkName(name) {
        if (typeof name != `string`) {
            throw new Error(`Name must be a String`)
        }
        return name;
    }

    checkBalance(input) {
        if (isNaN(input)) {
            throw new Error(`Balance amount must be a number`);
        }
        return input;
    }

    depositMoney(credit) {
        if (credit <= 0) {
            throw new Error('Please enter a valid amount')
        }
        this.#balance += credit;
        this.#transactions.push(credit);
    };

    withdrawMoney(debit) {
        if (this.#balance < debit) {
            throw new Error('Insufficient balance')
        }
        this.#balance -= debit;
        this.#transactions.push(debit);
    };


    addTransactions(transaction) {
        if (transaction.getCredit() > 0) {
            this.#balance += transaction.getCredit();
        } else {
            this.#balance -= transaction.getDebit();
        };

        this.#transactions.push({
            date: transaction.getDate(),
            credit: transaction.getCredit(),
            debit: transaction.getDebit(),
            balance: transaction.getTransactionBalance(this.#balance)
        });
    };
}
export default Account;
