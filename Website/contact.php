<?php

//form ajax
switch($_POST['formName']){
	case 'contact-form':
	if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['message'])){
		$name = $_POST['name'];
		$email = $_POST['email'];
		$body = $_POST['message'];

	//$val_email = "/^[^@ ]+@[^@ ]+\.[A-Za-z]{2,3}$/";//the address must end with 2 or 3 letters after the . - as in .com or .ca

		//send mail
		$headers = "From: Portfolio Site <anja@anjagusev.com>" . "\r\n"; headers .= "Reply-To: ". $email . "\r\n";
		$headers .= 'Content-type: text/html; charset=iso-8859-1'
		$message = "<html><body><h1>$from has submitted a contact form!</h1>";
		$message .= "<p><b>Name:</b> $from</p>";
		$message .= "<p><b>Email:</b> $email</p>";
		$message .= "<p><b>Subject:</b> $subj</p>";
		$message .= "<p><b>Message:</b> $body</p>";
		$message .= "</body></html>";
		//send
		$success = mail(
		"anja@anjagusev.com",
		$subj,
		$message,
		$headers);
		return true;
	}
	else
	{
		echo "failure";
	}
}