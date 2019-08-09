<a href="index.php">Return Home</a> <br><br>

<?php
  #include Other Files
  include "Contact.php";
  include "ContactManager.php";

  #Creating Connection To Server.
  $conn = ContactManager::createConnection();

  #Get Variables From The Form
  $phoneNBR = 0;
  if(isset($_POST['nameFirst'])) {  #First Name
    $nameFirst = $_POST['nameFirst']; 
  } else { $nameFirst = ""; }
  if(isset($_POST['nameLast'])) {   #Last Name
    $nameLast = $_POST['nameLast']; 
  } else { $nameLast = ""; }
  if(isset($_POST['phoneNBR'])) {   #Phone Number
    $phoneNBR = $_POST['phoneNBR']; 
  } else { $phoneNBR = ""; }
  if(isset($_POST['phoneType'])) {  #Phone Type
    $phoneType = $_POST['phoneType']; 
  } else { $phoneType = ""; }
  if(isset($_POST['email'])) {      #Email
    $email = $_POST['email']; 
  } else { $email = ""; }
  if(isset($_POST['ID'])) {         #ID
    $ID = $_POST['ID']; 
  } else { $ID = "-1"; }
  $ID = $ID+0;

  #Create Contact
  $contact = new Contact($ID, $nameFirst, $nameLast, $phoneNBR, $phoneType, $email);

  #Update Contact
  ContactManager::updateContact($conn, $contact);

  #Close Connection
  ContactManager::closeConnection($conn);
?>

