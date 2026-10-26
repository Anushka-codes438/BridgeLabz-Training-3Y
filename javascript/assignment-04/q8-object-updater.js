
const user = {
    name: "John",
    email: "john@mail.com",
    age: 21
};

const userForm = document.getElementById("userForm");
const output = document.getElementById("output");

function displayUser() {
    output.textContent = JSON.stringify(user, null, 2);
}

 
displayUser();

userForm.addEventListener("submit", function(event) {
    event.preventDefault();

     
    user.name = document.getElementById("name").value;
    user.email = document.getElementById("email").value;
    user.age = Number(document.getElementById("age").value);

    // Display the updated object
    displayUser();

    console.log(user);
});
