function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function validateForm(event) {
  event.preventDefault();
  var email = document.signUpForm.email.value;
  var pw = document.signUpForm.pass.value;

  var emailElmnt = document.getElementById("email");
  var pwElmnt = document.getElementById("pass");

  var emailBool;
  var pwBool;

  if (!validateEmail(email) || email.length == 0) {
    emailElmnt.className += " is-invalid";
    emailBool = false;
  } else {
    emailElmnt.className = "form-control";
    emailBool = true;
  }

  if (pw.length == 0) {
    pwElmnt.className += " is-invalid";
    pwBool = false;
  } else {
    pwElmnt.className = "form-control";
    pwBool = true;
  }

  if (pwBool && emailBool) {
    window.location.href = "../landing.html";
  }
}
