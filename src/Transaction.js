export default class Transaction {

    #date;
    #credit;
    #debit;
    #currentBalance;
    

    constructor(date, credit, debit) {
        this.#date = date;
        this.#credit = credit;
        this.#debit = debit;
    };

    getDate() {
        return this.#date;
    };

    getCredit() {
        return this.#credit;
    };

    getDebit() {
        return this.#debit;
    };

    getTransactionBalance() {
        return this.#currentBalance;
    }


}