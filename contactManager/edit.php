<a href="index.php">Return Home</a> <br><br>

<?php
  #Define Connection Info
  DEFINE('DB_USERNAME', 'Admin');
  DEFINE('DB_PASSWORD', 'CD1tRyvrgseUosCI');
  DEFINE('DB_HOST', 'localhost');
  DEFINE('DB_DATABASE', 'contactmanager');

  #Get Variables From The Form
  if(isset($_POST['ID'])) { 
    $ID = $_POST['ID']; 
  } else { $ID = "-1"; }

  #Connect to the SQL Server
  $conn = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DATABASE);

  #Make Sure We Are Connected
  if (mysqli_connect_error()) {
	echo "error";
    die('Connect Error ('.mysqli_connect_errno().') '.mysqli_connect_error());
  } else {
	#echo 'Connected successfully.';
  }

  #Set, execute, and prepare SQL Query
  $sql = "SELECT `nameFirst`, `nameLast`, `phoneNBR`, `phoneType`, `email` FROM `contacts` WHERE id=" . $ID;
  $result = mysqli_query($conn, $sql);
  $row = mysqli_fetch_assoc($result);

  #Create Edit Form
  echo "<form name='addContact' action='updateContact.php' method='post'><h2>Update Contact</h2>
  <input type='hidden' name='ID' Value='" . $ID . "'>
  <br>First Name: <input type='text' name='nameFirst' Value='" . $row["nameFirst"] . "' required>
  <br>Last Name: <input type='text' name='nameLast' Value='" . $row["nameLast"] . "'>
  <br>Phone Number: <input type='number' name='phoneNBR' Value='" . $row["phoneNBR"] . "' required>
  <br>Phone Type: <select name='phoneType' size='1' required>
    <option value='Cell' "   . ($row["phoneType"] == "Cell"   ? 'Selected' : '') . ">Cell</option>
    <option value='Home' "   . ($row["phoneType"] == "Home"   ? 'Selected' : '') . ">Home</option>
    <option value='Office' " . ($row["phoneType"] == "Office" ? 'Selected' : '') . ">Office</option>
    <option value='Other' "  . ($row["phoneType"] == "Other"  ? 'Selected' : '') . ">Other</option>
  </select>
  <br>Email: <input type='text' name='email' Value='" . $row["email"] . "'>
  <br><input type='submit' name='submit' value='Update Contact'>
  </form><br><br>";

  #Close Connection
  $mysqli->close();
?>

