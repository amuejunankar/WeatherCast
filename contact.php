<?php
    $name = $_POST['name'];
    $visitor = $_POST['email'];
    $message = $_POST['message'];


    $email_from ='junankgg@gmail.com';

    $email_body ="User Name: $name.\n".
                 "User email: $email.\n".
                 "User message: $message.\n";

    $to ="junankgg@gmail.com";

    $headers ="From $email_from \r\n";
    $headers .= "reply-To: $visitor_email  \r\n";

    mail($to,$email,$headers);
    header("Location: contactus.html");

?>