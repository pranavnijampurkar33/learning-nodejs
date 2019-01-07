const person = {
    name : "name",
    age : 10,
    greet() {
        console.log("Greet value");
    }
};

person.greet()
const activities = ["run","eat","sleep"];
console.log(activities);
console.log(person);

activities.push("water");
console.log(activities);

activities.pop("3tea");
console.log(`after removing bad activities: ${activities}`);

