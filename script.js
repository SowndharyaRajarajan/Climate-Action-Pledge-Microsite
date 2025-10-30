// Smooth scrolling
function scrollToForm() {
  document.getElementById("pledge-form-section").scrollIntoView({ behavior: "smooth" });
}
function scrollToPledgeWall() {
  document.getElementById("wall-section").scrollIntoView({ behavior: "smooth" });
}

// Load from local storage
let pledges = JSON.parse(localStorage.getItem("climatePledges")) || [];

// Update dashboard numbers
function updateKPI() {
  document.getElementById("total-pledges").textContent = pledges.length;
  const students = pledges.filter(p => p.profile === "Student").length;
  const professionals = pledges.filter(p => p.profile === "Working Professional").length;
  document.getElementById("student-count").textContent = students;
  document.getElementById("professional-count").textContent = professionals;
}

// Render pledge wall
function renderPledgeWall() {
  const tbody = document.getElementById("pledge-wall-body");
  tbody.innerHTML = "";
  pledges.forEach((p, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>#${index + 1}</td>
      <td>${p.name}</td>
      <td>${p.date}</td>
      <td>${p.state}</td>
      <td>${p.profile}</td>
      <td class="star-rating">⭐⭐⭐⭐⭐</td>
    `;
    tbody.appendChild(row);
  });
}

// Handle form submission
document.getElementById("pledge-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const mobile = document.getElementById("mobile").value.trim();
  const state = document.getElementById("state").value;
  const profile = document.querySelector('input[name="profile"]:checked')?.value;
  const commitments = Array.from(document.querySelectorAll('input[name="commitment"]:checked')).map(c => c.value);

  if (!name || !email || !mobile || !state || !profile || commitments.length === 0) {
    alert("⚠️ Please fill all fields and select at least one commitment.");
    return;
  }

  const date = new Date().toLocaleDateString();
  const newPledge = { name, email, mobile, state, profile, commitments, date };

  pledges.push(newPledge);
  localStorage.setItem("climatePledges", JSON.stringify(pledges));

  updateKPI();
  renderPledgeWall();
  generateCertificate(newPledge);
});

// Generate and show certificate
function generateCertificate(p) {
  document.getElementById("cert-name").textContent = p.name;
  document.getElementById("cert-date").textContent = "Date: " + p.date;
  document.getElementById("cert-commitments").textContent = `${p.commitments.length} Climate Commitments`;

  document.querySelector(".certificate-section").classList.add("show");
  document.getElementById("certificate-section").scrollIntoView({ behavior: "smooth" });

  // Confetti effect
  for (let i = 0; i < 30; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.background = `hsl(${Math.random() * 360}, 70%, 60%)`;
    confetti.style.animationDuration = 3 + Math.random() * 2 + "s";
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 4000);
  }
}

// Download certificate as PDF
async function downloadCertificate() {
  const certificate = document.getElementById("certificate");
  const { jsPDF } = window.jspdf;

  const canvas = await html2canvas(certificate);
  const imgData = canvas.toDataURL("image/png");

  const pdf = new jsPDF("landscape", "pt", [canvas.width, canvas.height]);
  pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
  pdf.save("Climate_Champion_Certificate.pdf");
}

// Reset all stored pledges
function resetAllPledges() {
  if (confirm("Are you sure you want to reset all pledges?")) {
    localStorage.removeItem("climatePledges");
    pledges = [];
    updateKPI();
    renderPledgeWall();
  }
}

// Initial render
updateKPI();
renderPledgeWall();
