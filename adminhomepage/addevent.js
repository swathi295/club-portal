document.getElementById("addEventForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const title = document.getElementById("eventTitle").value.trim();
  const date = document.getElementById("eventDate").value;
  const desc = document.getElementById("eventDesc").value.trim();
  const image = document.getElementById("eventImage").files[0];

  if (!title || !date || !desc) {
    alert("Please fill in all required fields.");
    return;
  }

  let imageName = image ? image.name : "No Image";

  // For now, just alert success
  alert(`Event Posted!\nTitle: ${title}\nDate: ${date}\nDescription: ${desc}\nImage: ${imageName}`);

  // Clear form
  this.reset();
});
