var total = 2;

function count(num) {
  var display = document.getElementById("totalAmount");
  console.log(total);
  display.innerHTML = num;
}

function add(id) {
  var output = document.getElementById(id);

  calc = parseInt(output.getAttribute("placeholder"));
  calc += 1;

  output.setAttribute("placeholder", String(calc));
  total += 1;
  count(total);
}

function subtract(id) {
  var output = document.getElementById(id);

  calc = parseInt(output.getAttribute("placeholder"));
  if (calc != 1) {
    calc -= 1;
    total -= 1;
  }

  output.setAttribute("placeholder", String(calc));

  count(total);
}

function remove(id) {
  var element = document.getElementById(id);
  var input = element.querySelector("input").getAttribute("placeholder");
  element.className += " d-none";
  total -= parseInt(input);
  count(total);
}

count(2);
