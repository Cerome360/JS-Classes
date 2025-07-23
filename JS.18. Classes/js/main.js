// JavaScript Classes


// Factory function
function pizzaFactory(pizzaSize) {
    const crust = "original";
    const size = pizzaSize;
    return {
        bake: () => console.log(`Baking a ${size} ${crust} crust pizza.`)
    }
}

const myPizza = pizzaFactory("small");
myPizza.bake();

// Parent class or Super class
/* class Pizza {
    constructor(pizzaSize) {
        //this.type = pizzaType;
        this.size = pizzaSize; //"medium";
        this.crust = "original";
        //this.toppings = [];
    }
    getCrust() {
        return this.crust;
    }
    setCrust(pizzaCrust) {
        this.crust = pizzaCrust;
    } */
// getToppings() {
//     return this.toppings;
//}
//setToppings(topping) {
//    this.toppings.push(topping);
//}
//bake() {
//    console.log(`Baking a ${this.size} ${this.type} ${this.crust} crust pizza.`);
//}
//}


//const myPizza = new Pizza("pepperoni", "small");  // We can change the property of a value using dot.notation
//myPizza.type = "Supreme";
//myPizza.setCrust("thin");
//myPizza.bake();
//myPizza.setToppings("sausage");
//myPizza.setToppings("olives");

//child class or special class

//class SpecialtyPizza extends Pizza {
//    constructor(pizzaSize) {
//        super(pizzaSize);
//        this.type = "The Works";
//    }
//    slice() {
//        console.log(`Our ${this.type} ${this.size} pizza has 8 slices.`)
//    }
//}
//const mySpecialty = new SpecialtyPizza("medium");
//mySpecialty.slice();

