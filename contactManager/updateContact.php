<a href="index.php">Return Home</a> <br><br>

<?php
  #Define Connection Info
  DEFINE('DB_USERNAME', 'Admin');
  DEFINE('DB_PASSWORD', 'CD1tRyvrgseUosCI');
  DEFINE('DB_HOST', 'localhost');
  DEFINE('DB_DATABASE', 'contactmanager');

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

  #Connect to the SQL Server
  $conn = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DATABASE);

  #Make Sure We Are Connected
  if (mysqli_connect_error()) {
	echo "error";
    die('Connect Error ('.mysqli_connect_errno().') '.mysqli_connect_error());
  } else {
	/*echo 'Connected successfully.';*/
  }

  #Update Contact
  $sql = "UPDATE `contacts` SET `nameFirst`='$nameFirst', `nameLast`='$nameLast', `phoneNBR`='$phoneNBR', `phoneType`='$phoneType', `email`='$email' WHERE ID=" . $ID;
  if(mysqli_query($conn, $sql)) {
    echo "Contact Updated for: " . $nameFirst . " " . $nameLast;
  } else {
	echo "<br>Error: " . $sql . "<br>" . mysqli_error($conn);
  }

  #Close Connection
  $mysqli->close();
?>

