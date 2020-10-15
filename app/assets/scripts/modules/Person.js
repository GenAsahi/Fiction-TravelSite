import { functions } from "lodash"

/* Lesson example for constructor*/
/*function Person(fullName, favColor) {
    this.name = fullName;
    this.favoriteColor = favColor;
    console.log("Hello, my name is " + this.name + " and my favorite color is " + this.favoriteColor + ".");
}*/

class Person {
    constructor(name, favoriteColor) {
        this.name =name;
        this.favoriteColor = favoriteColor;
        console.log("Hello, my name is " + this.name + " and my favorite color is " + this.favoriteColor + ".");
    }
}

export default Person