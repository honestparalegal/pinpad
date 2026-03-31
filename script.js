function vibrate(ms) {
  if (navigator.vibrate) navigator.vibrate(ms);
}

function pressNum(num) {
  vibrate(30);
  var input = document.getElementById("pinInput");
  if (input.value.length < 4) {
    input.value += num;
  }
}

function clearPIN() {
  vibrate(50);
  document.getElementById("pinInput").value = "";
  document.getElementById("error").style.display = "none";
}

function submitPIN() {
  vibrate(70);
  var entered = document.getElementById("pinInput").value;
  var correct = "9989";
  var redirect = "https://sites.google.com/view/emergency-profile-master/hospital-summary";

  if (entered === correct) {
    window.location.href = redirect;
  } else {
    document.getElementById("error").style.display = "block";
    vibrate([100, 50, 100]);
    clearPIN();
  }
}
