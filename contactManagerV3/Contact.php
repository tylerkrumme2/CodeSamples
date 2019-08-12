<?php
  class Contact {
    private $ID;
    private $nameFirst;
    private $nameLast;
    private $phoneNBR;
    private $phoneType;
    private $email;

    #setters & getters
    #ID
    function getID() {
      return $this->ID;
    }
    function setID($newID) {
      $this->ID = $newID;
    }

    #nameFirst
    function getNameFirst() {
      return $this->nameFirst;
    }
    function setNameFirst($newNameFirst) {
      $this->nameFirst = $newNameFirst;
    }

    #nameLast
    function getNameLast() {
      return $this->nameLast;
    }
    function setNameLast($newNameLast) {
      $this->nameLast = $newNameLast;
    }

    #phoneNBR
    function getPhoneNBR() {
      return $this->phoneNBR;
    }
    function setPhoneNBR($newPhoneNBR) {
      $this->phoneNBR = $newPhoneNBR;
    }

    #phoneType
    function getPhoneType() {
      return $this->phoneType;
    }
    function setPhoneType($newPhoneType) {
      $this->phoneType = $newPhoneType;
    }

    #email
    function getEmail() {
      return $this->email;
    }
    function setEmail($newEmail) {
      $this->email = $newEmail;
    }

    function __construct($ID, $nameFirst, $nameLast, $phoneNBR, $phoneType, $email){
      $this->setID($ID);
      $this->setNameFirst($nameFirst);
      $this->setNameLast($nameLast);
      $this->setPhoneNBR($phoneNBR);
      $this->setPhoneType($phoneType);
      $this->setEmail($email);
    }

    function printContact() {
      echo "<p>Name: " . $this->getNameFirst() . $this->getNameLast() . "<br>Phone: " . $this->getPhoneType() . " -- " . $this->getPhoneNBR() . "<br>Email: " . $this->getEmail() . " </p>" ;
    }

    function printEdit() {
      echo "<form method='post' action='edit.php'>
      <input type='hidden' name='ID' value='". $this->getID() ."'>
      <input type='submit' value='Edit'>
      </form>";
    }

    function printDelete() {
      echo "<form method='post' action='Delete.php'>
      <input type='hidden' name='ID' value='". $this->getID() ."'>
      <input type='submit' value='Delete'>
      </form><br>";
    }

  }

?>