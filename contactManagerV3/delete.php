<?php
  #include Other Files
  include "Contact.php";
  include "ContactManager.php";

  #Creating Connection To Server.
  $conn = ContactManager::createConnection();

  session_start();

  #Get Variables From The Form
  if(isset($_POST['ID'])) { 
    $ID = $_POST['ID']; 
  } else { $ID = "-1"; }

  $contact = ContactManager::getContactFromServer($conn, $ID);

  ContactManager::deleteContact($conn, $ID);

  #Close Connection
  ContactManager::closeConnection($conn);

  $complete = TRUE;
  $name = "" . $contact->getNameFirst() ." ". $contact->getNameLast();
  $_SESSION['deletedContact'] = $complete;
  $_SESSION['name'] = $name;

  header('Location: index.php');
?>

