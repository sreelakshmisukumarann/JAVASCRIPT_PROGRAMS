//object inheritance

baleno={
    model:'hatch back',
    varient:['automatic','manual'],
    manufacturer:'maruthi'
}

glanza={
    manufacturer:'toyota'
}

//child classname . __proto__ == parent class
glanza. __proto__ = baleno
console.log(glanza.model);