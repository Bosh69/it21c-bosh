//Input
const person1 = {
    name: "Bosh Dave L. Nagrampage",
    age: 69,
    gender: "Male",
    hobby: "Listening Music",
}

//Process and Output
console.log("Name: " + person1.name);
console.log("Age: " + person1.age);
console.log("Gender: " + person1.gender);
console.log("Hobby: " + person1.hobby);
console.log("--------------------------------");

// Class definition
class Person {
    constructor(name, age, gender, hobby) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.hobby = hobby;
    }

    // Method to display person information in the console
    displayInfo() {
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("Gender: " + this.gender);
        console.log("Hobby: " + this.hobby);
    }

    // Method to display person information in the HTML
    displayInfoHTML() {
        const personElement = document.getElementById('personOne');
        personElement.innerHTML = `
            <strong>Name:</strong> ${this.name}<br>
            <strong>Age:</strong> ${this.age}<br>
            <strong>Gender:</strong> ${this.gender}<br>
            <strong>Hobby:</strong> ${this.hobby}
        `;
    }
}
// Creating an object (instance) of the Person class
const personOne = new Person('Bosh Dave L. Nagrampage', 69, 'Male', 'Listening Music');

// Calling methods
personOne.displayInfo();
personOne.displayInfoHTML();