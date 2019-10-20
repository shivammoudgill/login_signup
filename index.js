function validation(){
	var name=document.forms["myForm"]["username"].value;
	var email=document.forms["myForm"]["email"].value;
	var pass=document.forms["myForm"]["password"].value;
	var pass2=document.forms["myForm"]["password2"].value;
	var f=1;
	if(name==""){
		alert("Username cannot be left empty");
		f=0;
	}
	else if(email==""){
		alert("Email cannot be left empty");
		f=0;
	}
	else if(pass=="" || pass2==""){
		alert("Password cannot be left empty");
		f=0;
	}
	if(f==1){
		var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
		if(!email.match(mailformat)){
			alert("Email is not correct");
		}
		else if(!pass.match(passw)){
			alert("Password shuould be atleast 6 character long and must contain an uppercase, lowecase and a digit");
		}
		else if(pass!=pass2){
			alert("Password does not match");
		}
		else{
		window.open("thepunjabiwriteups_main.html");
		}
	}
}


function vaidation2(){
	var pass=document.forms["myForm2"]["password"].value;
	var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
	var name=document.forms["myForm2"]["username"].value;
	if(name==""){
		alert("Username cannot be left empty");
	}
	else if(pass==""){
		alert("Password cannot be left empty");
	}
	else if(!pass.match(passw)){
		alert("Password shuould be atleast 6 character long and must contain an uppercase, lowecase and a digit");
	}
	else{
		window.open("thepunjabiwriteups_main.html");
	}
}
var modal = document.getElementById("myModal");
var modal1 = document.getElementById("myModal1");
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btn1 = document.getElementById("myBtn1");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span1 = document.getElementsByClassName("close1")[0];
// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}
btn1.onclick = function() {
  modal1.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
span1.onclick = function() {
  modal1.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}