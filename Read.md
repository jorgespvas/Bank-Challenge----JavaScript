### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2012  
**And** a deposit of 2000 on 13-01-2012  
**And** a withdrawal of 500 on 14-01-2012  
**When** she prints her bank statement  
**Then** she would see

```
date       || credit  || debit  || balance
14/01/2012 ||         || 500.00 || 2500.00
13/01/2012 || 2000.00 ||        || 3000.00
10/01/2012 || 1000.00 ||        || 1000.00
```


## User stories & domain modelling & testing

| Objects     | Properties                                        | Methods                         | Output      |
| ----------- | -----------                                       | ---------                       | ---------   |
| Account     | balance @integer                                  | getBalance()                    | @integer    |
|             | name @string                                      | getName()                       | @string     |
|             | transactions @array[Transaction]                  | getTransactions()               | @Transaction|
|             |                                                   | depositMoney(@Transaction)      | @Transaction|
|             |                                                   | withdrawMoney(@Transaction)     | @Transaction| 
|             |                                                   | addTransactions(@Transaction)   | @void       |
|             |                                                   | checkName(@string)              | @string     |
|             |                                                   | checkBalance(@integer)          | @integer    |
|             |                                                   |                                 |             |
|Transaction  | date @string                                      | getDate()                       | @string     |
|             | credit @integer                                   | getCredit()                     | @integer    |
|             | debit @integer                                    | getDebit()                      | @integer    |
|             | currentBalance @integer                           | getTransactionBalance()         | @integer    |
|             |                                                   |                                 |             |
| Statement   |                                                   | printStatement(@Account[array]) | @string     |



I have implemented the following tests for the bank challenge.

Test 1: getName and getBalance should return the values provided for the testAccount'
Test 2: getBalance should be default balance of 0
Test 3: getTransaction should return an empty array
Test 4: depositMoney should add to the balance
Test 5: withdrawMoney should subtract from the balance
Test 6: addTransactions should return the correct values entered

Test 7: getDate should return the transaction's date
Test 8: getCredit should return credit value
Test 9: getDebit should return correct debit value
Test 10: should call getTransactionBalance when called on the new Transaction

Test 11: should log all transactions