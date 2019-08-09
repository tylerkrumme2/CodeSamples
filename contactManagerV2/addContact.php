<a href="index.php">Return Home</a> <br>

<?php
  #include Other Files
  include "Contact.php";
  include "ContactManager.php";

  #Creating Connection To Server.
  $conn = ContactManager::createConnection();

  session_start();

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

  #create Contact
  $contact = new Contact(1, $nameFirst, $nameLast, $phoneNBR, $phoneType, $email);

  #Insert New Contact
  ContactManager::addContact($conn, $contact);

  #Close Connection
  ContactManager::closeConnection($conn);
  $complete = TRUE;
  $name = "" . $contact->getNameFirst() ." ". $contact->getNameLast();
  $_SESSION['addedContact'] = $complete;
  $_SESSION['name'] = $name;

  header('Location: index.php');
?>

