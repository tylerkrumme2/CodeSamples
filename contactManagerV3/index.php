<!DOCTYPE html>
<html>
<head>
<title>Contact Manager</title>
<link rel="stylesheet" href="contactManager.css">
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

<?php 
  $addComplete = $_SESSION['addedContact'];
  $updateComplete = $_SESSION['updatedContact'];
  $deleteComplete = $_SESSION['deletedContact'];
  if($addComplete || $updateComplete || $deleteComplete ) {
    echo "Updates: <br>";
  }
  if($addComplete) {
    echo "Contact Added For: " . $_SESSION['name'] . "<br><br>";
  }
  if($updateComplete) {
    echo "Contact Updated For: " . $_SESSION['name'] . "<br><br>";
  }
  if($deleteComplete) {
    echo "Contact Deleted For: " . $_SESSION['name'] . "<br><br>";
  }
  $_SESSION['addedContact'] = FALSE;
  $_SESSION['updatedContact'] = FALSE;
  $_SESSION['deletedContact'] = FALSE;
  $_SESSION['name'] = "";
?>

<h2> Add Contact </h2>

<form id="inputForm" name="addContact" action="addContact.php" method="post">Create New Contact
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