function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "千花", lastName: "Dondayo!!!!!" };
document.body.innerHTML = greeter(user);
