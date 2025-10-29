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
    // If it is the Create Event button, redirect to addevent.html
    if (button.id === "addEventBtn") {
      button.addEventListener("click", () => {
        window.location.href = "addevent.html";
      });
    } else {
      button.addEventListener("click", () => {
        const text = button.textContent.trim();

        if (text.includes("Panel")) {
          alert("Opening Student Management Panel...");
        } else if (text.includes("Reports")) {
          alert("Loading Reports...");
        } else {
          alert(`You clicked ${text}`);
        }
      });
    }
  });

  // --- Card hover animation ---
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "scale(1.02)";
      card.style.transition = "transform 0.2s ease";
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "scale(1)";
    });
  });
});
