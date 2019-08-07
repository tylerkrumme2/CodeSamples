<!DOCTYPE html>
<html>
<head>

<title>Contact Manager</title>

<style>
p {
  padding: 0px;
  margin: 0px;
  line-height: 14px;
  font-size: 14px;
}
body {
	margin: 4%;
	font-size: 140%;
}
</style>

</head>
<body>
<h1> Contacts Manager </h1>
<br>
<h2> Add Contact </h2> <!-- Create ADD CONTACT Form -->
<form name="addContact" action="addContact.php" method="post">Create New Contact
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
  <br><input type="submit" name="submit" value="Create Contact">
</form><br><br>

<h2> Contacts List </h2>
<?php
  #Define Connection Info
  DEFINE('DB_USERNAME', 'Admin');
  DEFINE('DB_PASSWORD', 'CD1tRyvrgseUosCI');
  DEFINE('DB_HOST', 'localhost');
  DEFINE('DB_DATABASE', 'contactmanager');

  #Connect to the SQL Server
  $conn = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DATABASE);

  #Make Sure We Are Connected
  if (mysqli_connect_error()) {
	echo "error";
    die('Connect Error ('.mysqli_connect_errno().') '.mysqli_connect_error());
  } else {
	#echo 'Connected successfully.';
  }

  #Set & Execute SQL Query
  $sql = "SELECT ID, nameFirst, nameLast, phoneNBR, phoneType, email FROM contacts";
  $result = mysqli_query($conn, $sql);

  #Read Out Contacts & Delete/Edit Buttons
  if(mysqli_num_rows($result) > 0){
	  while($row = mysqli_fetch_assoc($result)) {
      echo "<p><br>
      Name: " . $row["nameFirst"] ." ". $row["nameLast"] . " 
      <br>Phone: " . $row["phoneType"] . " -- " . $row["phoneNBR"] . " 
      <br>Email: " . $row["email"] . "</p>" .
      "<form method='post' action='edit.php'>
      <input type='hidden' name='ID' value='". $row["ID"] ."'>
      <input type='submit' value='Edit'>
      </form>" . 
      "<form method='post' action='Delete.php'>
      <input type='hidden' name='ID' value='". $row["ID"] ."'>
      <input type='submit' value='Delete'>
      </form><br>" 
      ;
	  }
  } else {
	  echo "<br>0 contacts";
  }

  #Close Connection
  $mysqli->close();
?>




</body>
</html>