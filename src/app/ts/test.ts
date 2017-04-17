interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName;
}

var user = { firstName: "gi", lastName: "ks" };

console.log(greeter(user));