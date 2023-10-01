<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $to = "srujan@email.com"; // Your email address where you want to receive the contact form data
    $subject = "New Contact Form Submission from $name";
    $headers = "From: $email";

    // Compose the email message
    $messageBody = "Name: $name\n";
    $messageBody .= "Email: $email\n\n";
    $messageBody .= "Message:\n$message";

    // Send the email
    $mailSent = mail($to, $subject, $messageBody, $headers);

    if ($mailSent) {
        echo "success"; // You can return a success message to the client
    } else {
        echo "error"; // You can return an error message to the client
    }
}
?>
