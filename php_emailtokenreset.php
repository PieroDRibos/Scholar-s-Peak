<?php

require_once './vendor/autoload.php';

// Import Classess
use Symfony\Component\Mailer\Transport;
use Symfony\Component\Mailer\Mailer;
use Symfony\Component\Mime\Email;

function sendVerificationEmail($userEmail, $token) {

    // Create a Transport object
    $transport = Transport::fromDsn('smtp://22test1998@gmail.com:ljnzchddryldirgw@smtp.gmail.com:587');

    // Create a Mailer object
    $mailer = new Mailer($transport);

    // Create an Email object
    $email = (new Email());

    // Set the "From address"
    $email->from('22test1998@gmail.com');

    // Set the "To address"
    $email->to($userEmail);

    // Set "CC"
    # $email->cc('cc@example.com');
    // Set "BCC"
    # $email->bcc('bcc@example.com');
    // Set "Reply To"
    # $email->replyTo('fabien@example.com');
    // Set "Priority"
    # $email->priority(Email::PRIORITY_HIGH);

    // Set a "subject"
    $email->subject('Search Box - Reset Password');

    // Set the plain-text "Body"
    $email->text('The plain text version of the message.');

    // Set HTML "Body"
    $email->html('<!DOCTYPE html>
                    <html lang="en">
                        <head>
                            <meta charset="UTF-8">
                            <title>Reset Password</title>
                        </head>
                        <body>
                            <div class="wrapper">
                                <p>
                                    Thank you for contacting us. Please click on the link below to reset your password.
                                </p>
                                <a href="https://nireas.uop.gr/scholarpeak/reset_password.html?token=' . $token . '">
                                    Reset your password
                                </a>
                            </div>
                        </body>
                    </html>');

    // Sending email
    $mailer->send($email);

}

?>