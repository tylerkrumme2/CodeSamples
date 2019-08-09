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

  #Get Contact @ ID
  $contact = ContactManager::getContactFromServer($conn, $ID);

  #Create Edit Form
  echo "<form name='addContact' action='updateContact.php' method='post'><h2>Update Contact</h2>
  <input type='hidden' name='ID' Value='" . $contact->getID() . "'>
  <br>First Name: <input type='text' name='nameFirst' Value='" . $contact->getNameFirst() . "' required>
  <br>Last Name: <input type='text' name='nameLast' Value='" . $contact->getNameLast() . "'>
  <br>Phone Number: <input type='number' name='phoneNBR' Value='" . $contact->getPhoneNBR() . "' required>
  <br>Phone Type: <select name='phoneType' size='1' required>
    <option value='Cell' "   . ($contact->getPhoneType() == "Cell"   ? 'Selected' : '') . ">Cell</option>
    <option value='Home' "   . ($contact->getPhoneType() == "Home"   ? 'Selected' : '') . ">Home</option>
    <option value='Office' " . ($contact->getPhoneType() == "Office" ? 'Selected' : '') . ">Office</option>
    <option value='Other' "  . ($contact->getPhoneType() == "Other"  ? 'Selected' : '') . ">Other</option>
  </select>
  <br>Email: <input type='text' name='email' Value='" . $contact->getEmail() . "'>
  <br><input type='submit' name='submit' value='Update Contact'>
  </form><br><br>";

  #Close Connection
  ContactManager::closeConnection($conn);
?>

