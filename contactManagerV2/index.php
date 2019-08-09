<!DOCTYPE html>
<html>
<head>
<title>Contact Manager</title>

<style>
p {
  padding: 0px;
  margin: 0px;
  line-height: 14px;
  font-size: 14px;
}
body {
	margin: 4%;
	font-size: 140%;
}
#formDiv {
  display: none;
}
</style>

</head>


<?php
  #include Other Files
  include "Contact.php";
  include "ContactManager.php";

  #Creating Connection To Server.
  $conn = ContactManager::createConnection();

  session_start();
?>


<body>
<h1> Contacts Manager </h1>
<br>

<h2> Add Contact </h2>

<?php 
  $isComplete = $_SESSION['addedContact'];
  if($isComplete) {
    echo "Contact Added For: " . $_SESSION['name'] . "<br><br>";
  }
  $_SESSION['addedContact'] = FALSE;
  $_SESSION['name'] = "";
?>

<form name="addContact" action="addContact.php" method="post">Create New Contact
  <br>First Name: <input type="text" name="nameFirst" placeholder="first name" required>
  <br>Last Name: <input type="text" name="nameLast" placeholder="last name">
  <br>Phone Number: <input type="number" name="phoneNBR" placeholder="0000000000" required>
  <br>Phone Type: <select name="phoneType" size="1" required>
    <option value="Cell">Cell</option>
    <option value="Home">Home</option>
    <option value="Office">Office</option>
    <option value="Other" Selected>Other</option>
  </select>
  <br>Email: <input type="text" name="email" placeholder="input Email">
  <br><input type="submit" name="submitNewContact" value="Create Contact">
  </form>

<br><br>

<h2> Contacts List </h2>

<?php  
  #Print All Contacts
  ContactManager::getAllContacts($conn);

  #Close Connection
  ContactManager::closeConnection($conn)
?>




</body>
</html>