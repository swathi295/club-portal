// studenthomepage/script.js
document.addEventListener("DOMContentLoaded", () => {
  // --- Logout confirmation ---
  const logoutBtn = document.querySelector(".logout-btn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", (e) => {
      e.preventDefault();
      if (confirm("Are you sure you want to logout?")) {
        window.location.href = "../loginpage/index.html";
      }
    });
  }

  // --- Card button click handlers ---
  document.querySelectorAll(".card button").forEach((button) => {
    button.addEventListener("click", () => {
      const text = button.textContent.trim();

      if (text.includes("Event")) {
        alert("Redirecting to Events Page...");
      } else if (text.includes("Submissions")) {
        alert("Opening Submissions...");
      } else if (text.includes("Clubs")) {
        alert("Loading Clubs Joined...");
      } else {
        alert(`You clicked ${text}`);
      }
    });
  });

  // --- Hover animation for cards ---
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-5px)";
      card.style.transition = "transform 0.2s ease";
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0)";
    });
  });
});
