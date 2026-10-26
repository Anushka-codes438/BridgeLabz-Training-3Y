
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const errors = [];

    if (username.length < 5) {
        errors.push("Username must contain at least 5 characters.");
    }

    if (password.length < 8) {
        errors.push("Password must contain at least 8 characters.");
    }

    if (!/[0-9]/.test(password)) {
        errors.push("Password must include a number.");
    }

    if (!/[A-Z]/.test(password)) {
        errors.push("Password must include an uppercase letter.");
    }

    if (!/[a-z]/.test(password)) {
        errors.push("Password must include a lowercase letter.");
    }

    if (!/[^A-Za-z0-9\s]/.test(password)) {
        errors.push("Password must include a special character.");
    }

    const errorBox = document.getElementById("errors");
    errorBox.replaceChildren();

    if (errors.length === 0) {
        errorBox.textContent = "Login validation successful!";
        errorBox.style.color = "green";
    } else {
        const heading = document.createElement("p");
        heading.textContent = "Please fix these errors:";
        errorBox.appendChild(heading);

        const list = document.createElement("ul");

        errors.forEach(error => {
            const item = document.createElement("li");
            item.textContent = error;
            list.appendChild(item);
        });

        errorBox.appendChild(list);
        errorBox.style.color = "red";
    }
});
