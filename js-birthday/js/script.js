function myFunction() {
  var username = prompt("what is your name?:")
  var day = prompt("Which day of the month were you born?:")
  var month = prompt("What month were you born?:")
  var year = prompt("What year were you born?")
  alert( "Hey " + username +  "! your birthday is " + month + "-" + day + "-" + year + "!");
  document.getElementById("birthday").innerHTML = txt;
}
