import Transaction from "../src/transaction.js";

describe(`Transaction Tests`, () => {

    let testTransaction;

    afterEach(() => {

        testTransaction = undefined;
    });

    it(`Test 7: getDate should return the transaction's date `, () => {
        //Arrange
        const testTransaction = new Transaction(`01/01/2000`, 0, 0)
        //Act
        const resultTransaction = testTransaction.getDate();
        //Assert
        expect(testTransaction.getDate()).toBe("01/01/2000");
    })




    it(`Test 8: getCredit should return credit value`, () => {
        //Arrange
        const testTransaction = new Transaction('01/01/2000', 100, 0);
        //Act
        const resultTransaction = testTransaction.getCredit();
        //Assert
        expect(testTransaction.getCredit()).toBe(100)
    })




    it(`Test 9: getDebit should return correct debit value`, () => {
        //Arrange
        const testTransaction = new Transaction('01/01/2000', 0, 50);
        //Act
        const resultTransaction = testTransaction.getDebit();
        //Assert
        expect(testTransaction.getDebit()).toBe(50);
    });



    it('Test 10: should call getTransactionBalance when called on the new Transaction', () => {

        //Arrange
        testTransaction = new Transaction('01/01/2000', 0, 0);
        let transactionSpy = spyOn(testTransaction, 'getTransactionBalance');

        //Act
        testTransaction.getTransactionBalance();

        //Assert
        expect(transactionSpy).toHaveBeenCalled();

    })



})