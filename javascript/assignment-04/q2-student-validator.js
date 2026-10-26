
const form = document.getElementById("studentForm");

const fields = [
    {
        id: "name",
        errorId: "nameError",
        regex: /^[A-Za-z ]+$/,
        message: "Name must contain only alphabets."
    },
    {
        id: "email",
        errorId: "emailError",
        regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Enter a valid email address."
    },
    {
        id: "phone",
        errorId: "phoneError",
        regex: /^\d{10}$/,
        message: "Phone must contain exactly 10 digits."
    },
    {
        id: "password",
        errorId: "passwordError",
        regex: /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9\s])\S+$/,
        message: "Password needs an uppercase letter, number and special character."
    }
];

function validateField(field) {
    const input = document.getElementById(field.id);
    const error = document.getElementById(field.errorId);
    const isValid = field.regex.test(input.value);

    input.classList.toggle("valid", isValid);
    input.classList.toggle("invalid", !isValid);
    error.textContent = isValid ? "" : field.message;

    return isValid;
}

// Validate fields while typing
fields.forEach(field => {
    document.getElementById(field.id).addEventListener("input", () => {
        validateField(field);
    });
});

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const allValid = fields
        .map(field => validateField(field))
        .every(Boolean);

    document.getElementById("result").textContent =
        allValid
            ? "Registration successful!"
            : "Please correct the errors above.";
});
