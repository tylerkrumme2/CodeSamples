<?php
  class ContactManager {

    public static function addContact($conn, Contact $newContact) {
      $ID = 1;
      $nameFirst = $newContact->getNameFirst();
      $nameLast = $newContact->getNameLast();
      $phoneNBR = $newContact->getPhoneNBR();
      $phoneType = $newContact->getPhoneType();
      $email = $newContact->getEmail();
      
      $sql = "INSERT INTO `contacts`(`ID`, `nameFirst`, `nameLast`, `phoneNBR`, `phoneType`, `email`) VALUES ('$ID','$nameFirst','$nameLast','$phoneNBR','$phoneType','$email')";
      while($ID<10000){
        if(mysqli_query($conn, $sql)) {
          break;
        } else {
          $ID++;
          $sql = "INSERT INTO `contacts`(`ID`, `nameFirst`, `nameLast`, `phoneNBR`, `phoneType`, `email`) VALUES ('$ID','$nameFirst','$nameLast','$phoneNBR','$phoneType','$email')";
        }
      }
    }

    public static function deleteContact($conn, $ID) {
      #Set SQL Query
      $sql = "DELETE FROM `contacts` WHERE ID=" . $ID;

      #Delete Row
      if(mysqli_query($conn, $sql)) {
        echo "<br>Contact Deleted";
      } else {
      echo "<br>Error: " . $sql . "<br>" . mysqli_error($conn);
      }
    }

    public static function getContactFromServer($conn, $ID) {
      #set SQL Query
      $sql = "SELECT * FROM `contacts` WHERE ID=" . $ID;
      $result = mysqli_query($conn, $sql);
      $row = mysqli_fetch_assoc($result);
      $contactToReturn = new Contact($row["ID"], $row["nameFirst"], $row["nameLast"], $row["phoneNBR"], $row["phoneType"], $row["email"]);

      return $contactToReturn;
    }

    public static function updateContact($conn, Contact $newInfo) {
      $nameFirst = $newInfo->getNameFirst();
      $nameLast = $newInfo->getNameLast();
      $phoneNBR = $newInfo->getPhoneNBR();
      $phoneType = $newInfo->getPhoneType();
      $email = $newInfo->getEmail();
      $ID = $newInfo->getID();

      $sql = "UPDATE `contacts` SET `nameFirst`='$nameFirst', `nameLast`='$nameLast', `phoneNBR`='$phoneNBR', `phoneType`='$phoneType', `email`='$email' WHERE ID=" . $ID;
      if(mysqli_query($conn, $sql)) {
        echo "Contact Updated for: " . $nameFirst . " " . $nameLast;
      } else {
      echo "<br>Error: " . $sql . "<br>" . mysqli_error($conn);
      }
    }

    public static function getAllContacts($conn) {
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
    }

    public static function createConnection() {
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
      return $conn;
    }

    public static function closeConnection($conn) {
      mysqli_close($conn);  
    } 

  }
?>