// const objProperty = Object.getOwnPropertyDescriptor(Math, 'PI');
// // .getOwnPropertyDescriptor helps to check the configs
// console.log(objProperty);

const coffee = {
    name: "Cold Coffee",
    price: 1000,
    isAvailable: true
}



Object.defineProperty(coffee, 'name', {     // .defineProperty is used to alter the properties
    // writable: false,
    enumerable: false,
})

console.log(Object.getOwnPropertyDescriptor(coffee, 'name'));

for (const [key, values] of Object.entries(coffee)) {   // .entries is used to make object iterable in for of loop
    console.log(`${key} : ${values}`);
}