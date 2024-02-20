// JavaScript Document
//global vars
var firstName;
var lastName;
var email;
var remail;
var userName;
var password;
var repassword;
var phone;

//function for validating form
function validateForm() {
	firstName = document.getElementById("firstName").value;
	lastName = document.getElementById("lastName").value;
    email = document.getElementById("email").value;
    remail = document.getElementById("remail").value;
    userName = document.getElementById("userName").value;
    password = document.getElementById("password").value;
    repassword = document.getElementById("repassword").value;
    phone = document.getElementById("phone").value;
    var validFirstName = false;
    var validLastName = false;
    var validPassword = false;
    var validUser = false;
    var validPhone = false;
    
    //Test to see if required fields are empty
	if (firstName == "" || lastName == "" || email == "" || remail == "" || 
        userName == "" || password == "" || repassword == "") {
		alert("One or more of the required fields * were not filled in!");
	}
    
    //Test to see if email matches
    if (email !== remail) {
        alert("Emails do not match please re-enter");
    }
    
    //Test to see if password matches
    if (password !== repassword) {
        alert("Passwords do not match please re-enter");
    }
    
    //Test first char of Password
    if (password.charAt(0) == password.charAt(0).toUpperCase()) {
       validPassword = true; 
    } else {
        validPassword = false;
    }
    
    
    //Test password length
    if (validPassword == true) {
        if (password.length == 8) {
            validPassword = true;
        } else {
            validPassword = false;
        }
    }
    
    //Test last char of password
    if (validPassword == true) {
        if (isNaN(parseInt(password.charAt(7)))) {
            validPassword = false;
        } else {
            validPassword = true;
        }
    }
    
    //Shows an alert if anything is wrong with password field
    if (validPassword == false) {
        alert("Please enter a valid password. First letter must be uppercase, must be 8 characters long, and last character must be a number");
    }
    
    //Test first char of userName
    if (isNaN(parseInt(userName.charAt(0)))) {
        validUser = true;
    } else {
        validUser = false;
    }
    
    //Test userName length is > than 1
    if (validUser == true) {
        if (userName.length < 2) {
            validUser = false;
        }
    }
    
    //Shows an alert if anything is wrong with user name field
    if (validUser == false) {
        alert("Please enter a valid user name");
    }
    
    //Test for numbers in First Name
    if (/[\d]/.test(document.getElementById("firstName").value)) {
        validFirstName = false;
    } else {
        validFirstName = true;
    }
     
    //Test first char of First Name
    if (validFirstName == true) {
        if(firstName.charAt(0) == firstName.charAt(0).toUpperCase()) {
            validFirstName = true;
        } else {
            validFirstName = false;
        }
    }
    
    //Test other chars in First Name
    for(var i = 1; i < firstName.length; i++) {
        if (validFirstName == true) {
            if (firstName.charAt(i) === firstName.charAt(i).toLowerCase()) {
                validFirstName = true
            } else {
                validFirstName = false;
            }
        }
    }
    
    //Test for numbers in Last Name
    if (/[\d]/.test(document.getElementById("lastName").value)) {
        validLastName = false;
    } else {
        validLastName = true;
    }
    
    //Test first char of Last Name
    if (validLastName == true) {
        if (lastName.charAt(0) == lastName.charAt(0).toUpperCase()) {
            validLastName = true;
        } else {
            validLastName = false;
        }
    }
    
    //Test other chars of Last Name
    for(var a = 1; a < lastName.length; a++) {
        if (validLastName == true) {
            if (lastName.charAt(a) === lastName.charAt(a).toLowerCase()) {
                validLastName = true;
            } else {
                validLastName = false;
            }
        }
    }
    
    //Shows an alert if anything is wrong with First Name field
    if(validFirstName == false) {
        alert("Please enter a vaild First Name. Must have first letter upper case and include no numbers");
    }
    
    //Shows an alert if anything is wrong with Last Name field
    if(validLastName == false){
        alert("Please enter a vaild Last Name. Must have first letter upper case and include no numbers");
    }
    
    //Test to see if the phone number length
    if (phone.length > 12 || phone.length <= 9) {
        validPhone = false;
    } else {
        validPhone = true;
    }
    
    //Test to see if the phone number is all numbers
    if (validPhone == true) {
        if (phone.length == 10) {
            for (var b = 0; b < phone.length; b++) {
                if (isNaN(parseInt(userName.charAt(b)))){
                    validPhone = true;
                } else {
                    validPhone = false;
                }
            }
        }
    }
    
    if(validPhone == false) {
        alert("Please enter a vaild phone number")
    }
}