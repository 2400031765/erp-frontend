// LOAD SELECTED STUDENT FROM LOGIN
let currentStudent = JSON.parse(localStorage.getItem("loggedStudent"));

document.getElementById("welcomeName").innerText =
    "Welcome " + currentStudent.name;

// Function to load subpages dynamically
function loadPage(page) {
    fetch(page)
        .then(res => res.text())
        .then(html => {
            document.getElementById("student-content").innerHTML = html;

            // After HTML loads → run data insertion
            if (page.includes("attendance")) renderAttendance();
            if (page.includes("marks")) renderMarks();
            if (page.includes("cgpa")) renderCGPA();
            if (page.includes("courses")) renderCourses();
            if (page.includes("timetable")) renderTimetable();
        });
}

// --------------------------------------------
// ATTENDANCE
// --------------------------------------------
function renderAttendance() {
    const div = document.getElementById("attendanceTable");
    let att = currentStudent.attendance;

    let html = `<table>
        <tr><th>Subject</th><th>Attendance (%)</th></tr>`;

    for (let sub in att) {
        html += `<tr><td>${sub}</td><td>${att[sub]}%</td></tr>`;
    }

    html += `</table>`;
    div.innerHTML = html;
}

// --------------------------------------------
// MARKS
// --------------------------------------------
function renderMarks() {
    const div = document.getElementById("marksTable");
    let m = currentStudent.marks;

    let html = `<table>
        <tr><th>Subject</th><th>Marks</th></tr>`;

    for (let sub in m) {
        html += `<tr><td>${sub}</td><td>${m[sub]}</td></tr>`;
    }

    html += `</table>`;
    div.innerHTML = html;
}

// --------------------------------------------
// CGPA
// --------------------------------------------
function renderCGPA() {
    document.getElementById("cgpaValue").innerText =
        currentStudent.cgpa;
}

// --------------------------------------------
// COURSES
// --------------------------------------------
function renderCourses() {
    const ul = document.getElementById("courseList");
    ul.innerHTML = "";

    currentStudent.courses.forEach(c => {
        ul.innerHTML += `<li>${c}</li>`;
    });
}

// --------------------------------------------
// TIMETABLE
// --------------------------------------------
function renderTimetable() {
    const table = document.getElementById("timetableTable");
    let t = currentStudent.timetable;

    let html = `<table>
        <tr><th>Day</th><th>Subjects</th></tr>`;

    for (let day in t) {
        html += `<tr><td>${day}</td><td>${t[day]}</td></tr>`;
    }

    html += `</table>`;
    table.innerHTML = html;
}

function logout() {
    localStorage.removeItem("loggedStudent");
    window.location.href = "../index.html";
}
