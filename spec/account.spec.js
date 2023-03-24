import Account from '../src/Account.js';

describe('Account Tests', () => {

    let testAccount;

    afterEach(() => {
        
        testAccount = undefined;
        
    });

    it('Test 1: getName and getBalance should return the values provided for the testAccount', () => {
        //Arrange
        testAccount = new Account(`Name`, 100);

        //Act
        const resultName = testAccount.getName();
        const resultBalance = testAccount.getBalance();
        
        //Assert
        expect(testAccount.getBalance()).toBe(100);
        expect(testAccount.getName()).toBe(`Name`);
    })



    it(`Test 2: getBalance should be default balance of 0`, () => {
        //Arrange
        testAccount = new Account(`Name`)
        //Act
        const resultBalance = testAccount.getBalance();
        //Assert
        expect(resultBalance).toBe(0);
})




    it(`Test 3: getTransaction should return an empty array`, () => {
        //Arrange
        testAccount = new Account(`Name`);

        //Act
        const resultTransaction = testAccount.getTransactions();
        
        //Assert
        expect(resultTransaction).toEqual([])
})


    it(`Test 4: depositMoney should add to the balance`, () => {
        //Arrange
        testAccount = new Account(`Name`);

        //Act
        testAccount.depositMoney(100);
        const resultBalance = testAccount.getBalance();

        //Assert
        expect(resultBalance).toBe(100);
})

    it(`Test 5: withdrawMoney should subtract from the balance`, () => {
        //Arrange
        testAccount = new Account(`Name`, 100);

        //Act
        testAccount.withdrawMoney(50);
        const resultBalance = testAccount.getBalance();

        //Assert
        expect(resultBalance).toBe(50);
})

    it(`Test 6: addTransactions should return the correct values entered`, () => {
        //Arrange
        testAccount = new Account(`Name`);
        const testTransactions={
            getDate: function () { return "01/01/2000" },
            getCredit: function () { return 100 },
            getDebit: function () { return 0 },
            getCashBalance: function () { return 0 }
        }

        //Act
        testAccount.addTransactions(testTransactions);

        //Assert
        expect(testAccount.getTransactions()[0].credit).toBe(100);
})

})