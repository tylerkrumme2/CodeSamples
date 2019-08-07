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

  #Set SQL Query
  $sql = "DELETE FROM `contacts` WHERE ID=" . $ID;

  #Delete Row
  if(mysqli_query($conn, $sql)) {
    echo "Contact Deleted";
  } else {
	echo "<br>Error: " . $sql . "<br>" . mysqli_error($conn);
  }

  #Close Connection
  $mysqli->close();
?>

