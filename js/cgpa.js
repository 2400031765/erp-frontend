// ----------------------------
// Load Logged-in Student
// ----------------------------
let currentStudent = JSON.parse(localStorage.getItem("loggedStudent"));

if (!currentStudent) {
    alert("Session expired. Please login again.");
    window.location.href = "../index.html";
}

// ----------------------------
// Display Student Name
// ----------------------------
document.getElementById("studName").innerText =
    `Student: ${currentStudent.name} (Grade ${currentStudent.grade})`;

// ----------------------------
// Display CGPA
// ----------------------------
document.getElementById("cgpaValue").innerText = currentStudent.cgpa;


// ----------------------------
// Back Button
// ----------------------------
function goBack() {
    window.location.href = "student-dashboard.html";
}
