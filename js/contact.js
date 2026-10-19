function showMessage() {
  document.getElementById("messageBox").style.display = "block";
}

function closeMessage() {
  document.getElementById("messageBox").style.display = "none";
}
function showMessage() {
  let navn = document.getElementsByClassName("input-box")[0].value;
  let email = document.getElementsByClassName("input-box")[1].value;
  let telefon = document.getElementsByClassName("input-box")[2].value;
  let emne = document.getElementsByClassName("input-box")[3].value;
  let besked = document.getElementsByClassName("input-box")[4].value;

  if (navn == "" || email == "" || telefon == "" || emne == "" || besked == "") {
    document.getElementById("errorMessage").innerHTML = "Please complete all required fields.";
  } else {
    document.getElementById("errorMessage").innerHTML = "";
    document.getElementById("messageBox").style.display = "block";
  }
}
