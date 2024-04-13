class Pizza {
    size: string;
    shape: string;
    toppings: string[];

    constructor(size: string, shape: string, toppings: string[]) {
        this.size = size;
        this.shape = shape;
        this.toppings = toppings;
    }

    toString(): string {
        return `${this.size} ${this.shape} pizza with ${this.toppings.join(', ')} toppings`;
    }
}

// Example of creating a Pizza object
const myPizza = new Pizza("Large", "Round", ["Cheese", "Pepperoni", "Mushrooms"]);
console.log(myPizza.toString()); // Output: Large Round pizza with Cheese, Pepperoni, Mushrooms toppings