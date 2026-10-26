
const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const seatsInput = document.getElementById("seats").value;

    const nameRegex = /^[A-Za-z ]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const seats = Number(seatsInput);
    const message = document.getElementById("message");
    const ticket = document.getElementById("ticket");

    message.textContent = "";
    ticket.textContent = "";

    if (!nameRegex.test(name)) {
        message.textContent = "Name must contain only alphabets.";
        return;
    }

    if (!emailRegex.test(email)) {
        message.textContent = "Enter a valid email address.";
        return;
    }

    if (
        seatsInput.trim() === "" ||
        !Number.isInteger(seats) ||
        seats < 1 ||
        seats > 10
    ) {
        message.textContent = "Select between 1 and 10 seats.";
        return;
    }

     
    const booking = { name, email, seats };

    message.textContent = "Booking successful!";

    ticket.innerHTML = `
        <h3>Movie Ticket Details</h3>
        <p>Name: ${booking.name}</p>
        <p>Email: ${booking.email}</p>
        <p>Seats: ${booking.seats}</p>
    `;
});
