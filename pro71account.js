accounts=[
    {
        acno:1000,ac_type:'savings',balance:45000,transaction:[
            {
                to:1001,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    },
    {
        acno:1001,ac_type:'current',balance:30000,transaction:[
            {
                to:1000,amount:1000,msg:'grossary',mode:'gpay'
            },
            {
                to:1002,amount:7000,msg:'gift',mode:'phonePay'
            },
            {
                to:1003,amount:10000,msg:'emi',mode:'neft'
            },
        ]
    },
    {
        acno:1002,ac_type:'fixed',balance:100000,transaction:[
            {
                to:1000,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1001,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    },
    {
        acno:1003,ac_type:'savings',balance:30000,transaction:[
            {
                to:1001,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1000,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    }
]

//1. total number of accounts
console.log('total number of accounts');
console.log(accounts.length);
console.log(`..........................`);

//2. print account number whose ac_type is savings
console.log('print account number whose ac_type is savings');
accounts.filter(ac=>ac.ac_type==['savings']).forEach(item=>console.log(item.acno));
console.log(`..........................`);

//3.print the balance of accnount number 1000
console.log('print the balance of accnount number 1000');
bal=accounts.find(ac=>ac.acno==1000)
console.log(bal.balance);
console.log(`..........................`);


//4. print all gpay transactions
console.log('print all gpay transactions');
accounts.map(item=>item.transaction).flat().filter(i=>i.mode=='gpay').forEach(item=>console.log(item));
console.log(`..........................`);

//5. print all transaction whose amount > 5000
console.log('print all transaction whose amount > 5000');
accounts.map(item=>item.transaction).flat().filter(i=>i.amount>5000).forEach(item=>console.log(item));
console.log(`..........................`);
 
//6. print credit transaction of account 1002
console.log('print credit transaction of account 1002');
cretra=accounts.map(item=>item.transaction).flat().filter(i=>i.to==1002)
console.log(cretra);
console.log(`..........................`);
 
//7. print debit transaction of account 1002
console.log('print debit transaction of account 1002');
debtran=accounts.find(data=>data.acno=='1002').transaction
console.log(debtran);
console.log(`......................................`);

//8. print transaction history of 1002
console.log(' print transaction history of 1002');
his={
    credit:cretra,
    debit:debtran
}
console.log(his);
console.log(`..........................`);
//another method - print as array
console.log(' print transaction history of 1002');
tranhis=[...cretra,...debtran] /*result wil be a nested array, to get the result as single array,use spread operator*/
console.log(tranhis);


//9. print highest balance account details
console.log('highest balance account details');
highest=accounts.reduce((data1,data2)=>data1.balance>data2.balance?data1:data2)
console.log(highest);
