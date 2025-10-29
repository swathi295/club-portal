// loginpage/script.js
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const studentBtn = document.getElementById("studentLogin");
  const adminBtn = document.getElementById("adminLogin");

  // Prevent default form submit
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  // Student login
  studentBtn.addEventListener("click", () => {
    // You can add validation logic here (e.g., check email/password)
    alert("Logged in as Student");
    window.location.href = "../studenthomepage/index.html";
  });

  // Admin login
  adminBtn.addEventListener("click", () => {
    // Validation logic can be added here too
    alert("Logged in as Admin");
    window.location.href = "../adminhomepage/index.html";
  });
});
