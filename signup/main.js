function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function validateForm(event) {
  event.preventDefault();
  var name = document.signUpForm.firstName.value;
  var email = document.signUpForm.email.value;
  var pw = document.signUpForm.pass.value;
  var pwc = document.signUpForm.passConfirm.value;

  var nameElmnt = document.getElementById("firstName");
  var emailElmnt = document.getElementById("email");
  var pwcElmnt = document.getElementById("passConfirm");
  var pwElmnt = document.getElementById("pass");

  var nameBool;
  var emailBool;
  var pwcBool;
  var pwBool;

  if (name.length == 0) {
    nameElmnt.className += " is-invalid";
    nameBool = false;
  } else {
    nameElmnt.className = "form-control";
    nameBool = true;
  }

  if (!validateEmail(email) || email.length == 0) {
    emailElmnt.className += " is-invalid";
    emailBool = false;
  } else {
    emailElmnt.className = "form-control";
    emailBool = true;
  }

  if (pw != pwc || pwc.length == 0) {
    pwcElmnt.className += " is-invalid";
    pwcBool = false;
  } else {
    pwcElmnt.className = "form-control";
    pwcBool = true;
  }

  if (pw.length < 8) {
    alert("Password must be at least 8 characters long");
    pwElmnt.className += " is-invalid";
    pwBool = false;
  } else {
    pwElmnt.className = "form-control";
    pwBool = true;
  }

  if (pwBool && pwcBool && nameBool && emailBool) {
    window.location.href = "../login/login.html";
  }
}
