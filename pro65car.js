
var car = {
    name:"mini cooper",
    model:"hatch back",
    manufacturer:'BMC',
    price:"1 core"
}

console.log(car);

//display car name and its manufacturer name price
console.log(`car;${car.name},manufacturer name: ${car.manufacturer} \n price is:${car.price}`);
console.log(`........................................................`);

//check model key is available in car, if yes then display its value
console.log("model" in car?`car model is ${car.model}`:"key is not available");
console.log(`........................................................`);


//add "varient" key to car with value as "manuel"
car.varient=["manuel"] //give as array
console.log(car);
console.log(`........................................................`);

//insert another value to "varient" key to car with value as "automatic"
car.varient.push("automatic")
console.log(car);
console.log(`............................................`);

//add "color" key to car with value as "red", "white", "blue"
car.colour=["red","white","blue"]
console.log(car);
console.log(`................................`);