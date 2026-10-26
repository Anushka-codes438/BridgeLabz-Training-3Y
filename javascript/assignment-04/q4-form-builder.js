
class FormBuilder {
    constructor(fields, containerId) {
        this.fields = fields;
        this.container = document.getElementById(containerId);
    }

    createForm() {
        const formFields = this.fields.map((field, index) => `
            <label for="field${index}">${field.label}</label>
            <input
                type="${field.type}"
                id="field${index}"
                name="${field.name}"
                placeholder="${field.label}"
                required
            >
        `).join("");

        this.container.innerHTML = `
            <form id="dynamicForm">
                ${formFields}
                <button type="submit">Submit</button>
            </form>
        `;

        document.getElementById("dynamicForm")
            .addEventListener("submit", event => {
                event.preventDefault();

                const data = this.getFormData();

                document.getElementById("output").textContent =
                    JSON.stringify(data, null, 2);
            });
    }

    getFormData() {
        const data = {};

        this.fields.forEach((field, index) => {
            data[field.name] =
                document.getElementById(`field${index}`).value;
        });

        return data;
    }
}

const fields = [
    { type: "text", label: "Username", name: "username" },
    { type: "email", label: "Email", name: "email" },
    { type: "password", label: "Password", name: "password" }
];

const builder = new FormBuilder(fields, "formContainer");
builder.createForm();
