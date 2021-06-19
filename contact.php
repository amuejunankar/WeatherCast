<?php
    $name = $_POST['name'];
    $visitor = $_POST['email'];
    $message = $_POST['message'];


    $email_from ='user@example.com';

    $email_body ="User Name: $name.\n".
                 "User email: $email.\n".
                 "User message: $message.\n";

    $to ="user@example.com";

    $headers ="From $email_from \r\n";
    $headers .= "reply-To: $visitor_email  \r\n";

    mail($to,$email,$headers);
    header("Location: contactus.html");

?>