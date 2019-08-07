<a href="index.php">Return Home</a> <br>

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

  #Connect to the SQL Server
  $conn = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DATABASE);

  #Make Sure We Are Connected
  if (mysqli_connect_error()) {
	echo "error";
    die('Connect Error ('.mysqli_connect_errno().') '.mysqli_connect_error());
  } else {
	/*echo 'Connected successfully.';*/
  }

  #Set ID & Insert New Contact
  $ID=1;
  $sql = "INSERT INTO `contacts`(`ID`, `nameFirst`, `nameLast`, `phoneNBR`, `phoneType`, `email`) VALUES ('$ID','$nameFirst','$nameLast','$phoneNBR','$phoneType','$email')";
  while($ID<10000){
    if(mysqli_query($conn, $sql)) {
      echo "New Contact Created for: " . $nameFirst . " " . $nameLast;
      break;
    } else {
      $ID++;
      $sql = "INSERT INTO `contacts`(`ID`, `nameFirst`, `nameLast`, `phoneNBR`, `phoneType`, `email`) VALUES ('$ID','$nameFirst','$nameLast','$phoneNBR','$phoneType','$email')";
    }
  }

  #Close Connection
  $mysqli->close();
?>

