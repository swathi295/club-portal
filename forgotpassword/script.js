document.getElementById("forgotForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Password reset link sent to your email!");
  window.location.href = "../loginpage/index.html";
});
