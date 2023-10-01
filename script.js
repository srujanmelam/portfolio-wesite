document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = form.elements.name.value;
        const email = form.elements.email.value;
        const message = form.elements.message.value;

        // Create a FormData object to send the form data
        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("message", message);

        // Send a POST request to the server-side script (contact.php)
        fetch("contact.php", {
            method: "POST",
            body: formData,
        })
        .then(response => response.text())
        .then(data => {
            if (data === "success") {
                // Handle success (e.g., show a success message to the user)
                alert("Message sent successfully!");
                form.reset();
            } else {
                // Handle error (e.g., display an error message to the user)
                alert("Error sending message. Please try again later.");
            }
        })
        .catch(error => {
            console.error("Error:", error);
        });
    });
});
