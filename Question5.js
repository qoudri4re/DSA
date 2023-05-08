let accountInfo = `First Name,Last Name,Account Number,Phone Number
Onome,Ehigiator,6152,08148975238
Adegoke,Akeem-omosanya,6972,07015181324
Bukola,Ehigiator,8467,07029300358
Olufunmi,Aremu,3976,08010170877
Ifeanyichukwu,Ekwueme,8965,07021118253
Isioma,Mustapha,8555,09164393835
Ayebatari,Joshua,8657,09050143877
Nnamdi,Olawale,3587,07021899665
Lola,Abosede,6807,07062943330
Emeka,Oyelude,6701,08190576207`

let accountTransaction = `SN,Account Number,Amount,Credit/Debit
1,6152,2008,Credit
2,6152,1173,Credit
3,6152,2994,Credit
4,6152,2147,Debit
5,6152,4989,Debit
6,6972,4344,Credit
7,6972,4545,Credit
8,6972,4021,Credit
9,6972,4991,Debit
10,6972,2038,Credit
11,8467,2243,Credit
12,8467,3216,Credit
13,8467,2417,Debit
14,8467,2106,Credit
15,8467,4533,Debit
16,3976,4616,Credit
17,3976,4941,Credit
18,3976,1439,Debit
19,3976,4082,Credit
20,3976,2022,Debit
21,8965,3248,Credit
22,8965,3921,Credit
23,8965,3309,Debit
24,8965,1880,Credit
25,8965,3936,Debit
26,8555,4511,Credit
27,8555,1902,Credit
28,8555,1097,Debit
29,8555,2007,Credit
30,8555,3289,Credit
31,8657,3530,Debit
32,8657,4565,Debit
33,8657,1669,Credit
34,8657,1054,Credit
35,8657,4723,Debit
36,3587,4673,Debit
37,3587,2722,Credit
38,3587,3554,Credit
39,3587,2891,Debit
40,3587,3590,Credit
41,6807,1711,Credit
42,6807,4020,Credit
43,6807,1594,Debit
44,6807,4692,Debit
45,6807,1774,Credit
46,6701,4629,Credit
47,6701,3602,Debit
48,6701,1010,Credit
49,6701,3596,Credit
50,6701,1632,Debit`

accountInfo = accountInfo.split("\n").slice(1)
accountInfo = accountInfo.map(item => item.split(","))
accountInfo = accountInfo.map(item => {
	return {
		firstName: item[0],
		lastName: item[1],
		accountNumber: item[2],
		phoneNumber: item[3]
	}
})
accountTransaction = accountTransaction.split("\n").slice(1)
accountTransaction = accountTransaction.map(item => item.split(","))
accountTransaction = accountTransaction.map(item => {
	return {
		id: item[0],
		accountNumber: item[1],
		amount: item[2],
		transactionType: item[3]
	}
})

const readline = require('readline');

function changeNumber(rl) {
	rl.question("Enter account number:", accountNumber => {
		
		function change() {
		 rl.question("Enter previous phone number: ", prevNumber => {
			let account = accountInfo.filter(item => item.accountNumber === accountNumber)[0]

		
			 if (account.phoneNumber === prevNumber) {
			
				 rl.question("Enter the new phone number: ", newNum => {
					 accountInfo = accountInfo.map(item => {
						 if (item.phoneNumber === prevNumber) {
							 return {
								 ...item,
								 phoneNumber: newNum
							 }
						 }
						 return item
					 })
					 console.log("Your new phone number has been changed.")
					 rl.close()
				 })
			 } else {
				 console.log(`Invalid phone number. This is not the correct phone number for ${account.firstName} ${account.lastName}`)
				 change()
				
			 }
			

		})
	}
	change()
	
	})
}

function lastThreeTransaction(rl) {
	rl.question("Enter account number:", accountNumber => {
		let lastThreeTransactions = accountTransaction.filter(item => item.accountNumber === accountNumber).slice(-3)
		console.log("----------------------------")
		console.log("| Amount | Transaction Type |")
		lastThreeTransactions.map(item => {
		console.log(`| ${item.amount}   | ${item.transactionType}     |`)
		})
		rl.close()
	})
}

function checkAccountDetails(rl) {
	rl.question("Enter account number:", accountNumber => {
		let account = accountInfo.filter(item => item.accountNumber === accountNumber)
		
			
		if (account.length) {
			account = account[0]
			console.log(`The account details for account number ${accountNumber} is: ['First Name: ${account.firstName}', 'Last Name: ${account.lastName}', 'Phone Number: ${account.phoneNumber}'] `)
		} else {
			console.log("account not found")
		}
		rl.close()
	})
}

function checkBalance(rl) {
	rl.question("Enter account number:", accountNumber => {
		let accountTransactions = accountTransaction.filter(item => item.accountNumber === accountNumber)
		
		if (!accountTransactions.length) {
			console.log(`no transaction found for account: ${accountNumber}`)
			
		} else {
			let balance = 0
			accountTransactions.map(item => {
		
				if (item.transactionType === "Credit") {
					balance += parseInt(item.amount)
					
					
				} else {
					balance -= parseInt(item.amount)
				}
				
			})
			let account = accountInfo.filter(item => item.accountNumber === accountNumber)[0]
			console.log(`The account balance for ${account.firstName + " " + account.lastName} is ${balance}`)
		}
		rl.close()
	})
	
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter 1 to check account balance' + "\n" + "enter 2 to check account details" + "\n" + "enter 3 to print last three transactions" + "\n" + "enter 4 to change phone number: ", (operation) => {
  switch (operation) {
	  case "1":
		  checkBalance(rl)
		  break
	  case "2":
		  checkAccountDetails(rl)
		  break
	  case "3":
		  lastThreeTransaction(rl)
		  break
	  case "4":
		  changeNumber(rl)
		  break
	  default:
		  console.log("invalid input")

  }
});


