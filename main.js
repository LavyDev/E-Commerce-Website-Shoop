function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function validateForm(event) {
  event.preventDefault();
  var email = document.contactForm.email.value;
  var num = document.contactForm.phone.value;

  var emailElmnt = document.getElementById("email");
  var numElmnt = document.getElementById("phone");
  var submitBtn = document.getElementById("submitBtn");

  var emailBool;
  var numBool;

  if (!validateEmail(email) || email.length == 0) {
    emailElmnt.className += " is-invalid";
    emailBool = false;
  } else {
    emailElmnt.className = "form-control";
    emailBool = true;
  }

  if (num.length == 0) {
    numElmnt.className += " is-invalid";
    numBool = false;
  } else {
    numElmnt.className = "form-control";
    numBool = true;
  }

  if (numBool && emailBool) {
    submitBtn.innerHTML = "Submitted!";
    submitBtn.className = "btn btn-success ms-1 h-50";
  }
}
