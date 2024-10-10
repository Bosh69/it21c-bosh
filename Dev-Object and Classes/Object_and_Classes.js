const person1 ={
    name:"Bosh",
    age:69,
    occupation:"Dota Gamerz",
    hobby: "Playing Dotes",
    tagline: "Yahooooooooooooooooooo"

}

console.log("Name :" + person1.name);
console.log("Age :" + person1.age);
console.log("Occupation :" + person1.occupation);
console.log("Hobby :" + person1.hobby);
console.log("Tagline; " + person1);

document.getElementById("person1-name").innerHTML = "Name: " + person1.name;
document.getElementById("person1-age").innerHTML = "Age: " + person1.age;
document.getElementById("person1-occupation").innerHTML = "Occupation: " + person1.occupation;
document.getElementById("person1-hobby").innerHTML = "Hobby: " + person1.hobby;
document.getElementById("person1-tagline").innerHTML = "Tagline: " + person1.tagline;