function showSignup() {
  document.getElementById("form-login").style.display = "none";
  document.getElementById("form-signup").style.display = "flex";
}

function showLogin() {
  document.getElementById("form-login").style.display = "flex";
  document.getElementById("form-signup").style.display = "none";
}

function finish() {
  window.location.href = "finish.html";
}