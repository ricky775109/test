<<<<<<< HEAD
=======


>>>>>>> ad5ced6385bb076c4ba15ced8ecd696d55dcde3c
interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

<<<<<<< HEAD
let user = { firstName: "千花", lastName: "Dondayo!!!!!" };
=======
let user = { firstName: "DIO", lastName: "Brando" };
>>>>>>> ad5ced6385bb076c4ba15ced8ecd696d55dcde3c

document.body.innerHTML = greeter(user);