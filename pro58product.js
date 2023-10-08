
//[id,name,price,stock]
products=[
    [1,'hide and seek',50,20],
    [2,'lays',20,80],
    [3,'oreo',40,100],
    [4,'parleG',25,0],
    [5,'tiger',20,30],
    [6,'unibic',60,0],
    [7,'good day',70,20]

]

// 1. display all product name
console.log('display all product name');
prodname=products.map(pro=>pro[1]).forEach(item=>{console.log(item);});
console.log(`...............................................`);

// 2. display product whose price < Rs.50
console.log('display product whose price < Rs.50');
products.filter(pro=>pro[2]<'50').forEach(item=>{console.log(item);});
console.log(`.....................................`);

// 3)print price of oreo
console.log(`price of oreo`);
oreo=products.find(pro=>pro[1]=='oreo')
console.log(oreo[2]);
console.log(`................................`);

// 4)print costly product name
console.log('costly product name');
costlyp=products.reduce((pro1,pro2)=>pro1[2]>pro2[2]?pro1:pro2)
console.log(costlyp[1]);
console.log(`...............................................`);

// 5)display out of stock product
console.log('out of stock product');
outofstock=products.filter(pro=>pro[3]==0).forEach(item=>{console.log(item[1]);});
console.log(`........................................`);

// 6)sort product based on stock in descending order
console.log('sort product based on stock in descending order');
products.sort((pro1,pro2)=>pro2[3]-pro1[3]).forEach(item=>{console.log(item[1]);});
console.log(`........................................`);

// 7))print product having maximum available stock
console.log('product having maximum available stock');
maxstock=products.reduce((pro1,pro2)=>pro1[3]>pro2[3]?pro1:pro2)
console.log(maxstock[1]);
console.log(`..................................................`);

// 8)is there any product can be purchased by rs.10
console.log('is there any product can be purchased by rs.10');
price=products.some(pro=>pro[2]<=10)
console.log(price?'yes':'no');
console.log(`.....................................`);

// 9)is there any product in the range of 10 to 30
console.log('is there any product in the range of 10 to 30');
range=products.some(pro=>pro[2]>=10 && pro[2]<=30)
console.log(range?'yes':'no');
console.log(`.....................................`);

// 10)print all products in the range of 10 to 30
console.log('print all products in the range of 10 to 30');
prorange=products.filter(pro=>pro[2]>=10 && pro[2]<=30).forEach(item=>{console.log(item[1]);});
