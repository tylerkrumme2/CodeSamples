<!DOCTYPE html>
<html>
<head>

<title>My CIS 255 Files</title>

<style>

body {
	margin: 4%;
	font-size: 140%;
}

</style>

</head>
<body>

<?php

/* Do not touch the code below */

//Gets the variables from a post form
if(isset($_POST['invoiceText'])) { $invoiceText = $_POST['invoiceText']; } else { $invoiceText = ""; }

echo($invoiceText);

?>

</body>
</html>