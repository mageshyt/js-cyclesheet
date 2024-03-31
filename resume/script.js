const resumeForm = document.getElementById("resumeForm");
const resumeOutput = document.getElementById("resumeOutput");

resumeForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const education = document.getElementById("education").value;
  const experience = document.getElementById("experience").value;

  const formattedResume = `
    <h2>Resume</h2>
    <p><strong>Full Name:</strong> ${fullName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <h3>Education</h3>
    <p>${education}</p>
    <h3>Experience</h3>
    <p>${experience}</p>
  `;

  resumeOutput.innerHTML = formattedResume;
});
