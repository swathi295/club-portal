// --- Navigation Buttons ---
document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.querySelector(".login-btn");
  const getStartedBtn = document.querySelector(".get-started");

  // Redirect to login page when "Login" is clicked
  if (loginBtn) {
    loginBtn.addEventListener("click", () => {
      window.location.href = "../loginpage/index.html";
    });
  }

  // Redirect to login page when "Get Started" is clicked
  if (getStartedBtn) {
    getStartedBtn.addEventListener("click", () => {
      window.location.href = "../loginpage/index.html";
    });
  }

  // Handle other info section buttons (Join / Explore / Register)
  document.querySelectorAll(".info-block button").forEach((btn) => {
    btn.addEventListener("click", () => {
      const btnText = btn.textContent.trim().toLowerCase();

      if (btnText === "join" || btnText === "explore") {
        window.location.href = "../homepage/index.html";
      } else if (btnText === "register") {
        window.location.href = "../loginpage/index.html";
      } else {
        alert(`You clicked ${btn.textContent}`);
      }
    });
  });

  // Optional: add hover effects or simple animations
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-5px)";
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0)";
    });
  });
});
