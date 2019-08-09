<a href="index.php">Return Home</a> <br><br>

<?php
  #include Other Files
  include "Contact.php";
  include "ContactManager.php";

  #Creating Connection To Server.
  $conn = ContactManager::createConnection();

  #Get Variables From The Form
  if(isset($_POST['ID'])) { 
    $ID = $_POST['ID']; 
  } else { $ID = "-1"; }

  ContactManager::deleteContact($conn, $ID);

  #Close Connection
  ContactManager::closeConnection($conn);
?>

