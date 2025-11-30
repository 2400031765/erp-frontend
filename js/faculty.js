// ======================================
// SAMPLE STUDENT DATA (loads once)
// ======================================
if (!localStorage.getItem("students")) {
    const sampleStudents = [
        { id: "STU1001", name: "Aarav Reddy", dept: "CSE", year: 1 },
        { id: "STU1002", name: "Manasa Anantarapu", dept: "CSE", year: 2 },
        { id: "STU1003", name: "Kiran Teja", dept: "ECE", year: 1 },
        { id: "STU1004", name: "Sneha Patil", dept: "CSE", year: 3 },
        { id: "STU1005", name: "Rishi Kumar", dept: "IT", year: 2 },
        { id: "STU1006", name: "Shreya Das", dept: "ECE", year: 3 },
        { id: "STU1007", name: "Nikhil Sharma", dept: "CSE", year: 4 },
        { id: "STU1008", name: "Harsha Vardhan", dept: "EEE", year: 2 },
        { id: "STU1009", name: "Rupa Sree", dept: "CSE", year: 1 },
        { id: "STU1010", name: "Vishal Naidu", dept: "IT", year: 3 }
    ];
    localStorage.setItem("students", JSON.stringify(sampleStudents));
}

// =========================================
// LOAD PARTIAL PAGE
// =========================================
function loadPage(page) {
    fetch(page)
        .then(res => res.text())
        .then(html => {
            document.getElementById("content-area").innerHTML = html;

            // Re-run module initializer after partial loads
            if (page.includes("manage-students")) loadStudents();
            if (page.includes("attendance")) loadAttendanceUI();
            if (page.includes("marks")) loadMarksUI();
            if (page.includes("schedule-classes")) loadFacultyTimetable();

            window.scrollTo({
                top: document.getElementById("content-area").offsetTop - 20,
                behavior: "smooth"
            });
        });
}


function logout() {
    window.location.href = "../index.html";
}



// =========================================
// MANAGE STUDENTS
// =========================================

function loadStudents() {
    let students = JSON.parse(localStorage.getItem("students")) || [];
    let table = document.getElementById("student-table");

    if (!table) return;

    table.innerHTML = students.map((s, i) => `
        <tr>
            <td>${s.id}</td>
            <td>${s.name}</td>
            <td>${s.dept}</td>
            <td>${s.year}</td>
            <td><button class="delete-btn" onclick="deleteStudent(${i})">Delete</button></td>
        </tr>
    `).join("");
}

function addStudent() {
    let id = sid.value.trim();
    let name = sname.value.trim();
    let dept = sdept.value.trim();
    let year = syear.value.trim();

    if (!id || !name || !dept || !year) {
        alert("Fill all fields!");
        return;
    }

    let students = JSON.parse(localStorage.getItem("students")) || [];
    students.push({ id, name, dept, year });

    localStorage.setItem("students", JSON.stringify(students));
    loadStudents();
}

function deleteStudent(i) {
    let students = JSON.parse(localStorage.getItem("students")) || [];
    students.splice(i, 1);
    localStorage.setItem("students", JSON.stringify(students));
    loadStudents();
}



// =========================================
// ATTENDANCE
// =========================================

function loadAttendanceUI() {
    let courseSelect = document.getElementById("attendanceCourse");
    let studentsDiv = document.getElementById("attendanceStudents");

    let courses = ["Operating Systems", "DBMS", "Java", "Python", "Networks"];
    let students = JSON.parse(localStorage.getItem("students")) || [];

    // Load Courses
    courseSelect.innerHTML = courses.map(c => `<option>${c}</option>`).join("");

    // Load Students
    studentsDiv.innerHTML = students.map(s => `
        <div class="student-row">
            <strong>${s.name}</strong> (${s.id})
            <select id="att_${s.id}">
                <option value="Present">Present</option>
                <option value="Absent">Absent</option>
            </select>
        </div>
    `).join("");

    loadSavedAttendance();
}


function saveAttendance() {
    let course = document.getElementById("attendanceCourse").value;
    let date = document.getElementById("attendanceDate").value;

    if (!date) {
        alert("Select a date!");
        return;
    }

    let students = JSON.parse(localStorage.getItem("students")) || [];
    let records = JSON.parse(localStorage.getItem("attendanceRecords")) || [];

    students.forEach(s => {
        let status = document.getElementById(`att_${s.id}`).value;

        records.push({
            name: s.name,
            id: s.id,
            course: course,
            date: date,
            status: status
        });
    });

    localStorage.setItem("attendanceRecords", JSON.stringify(records));
    loadSavedAttendance();
}

function loadSavedAttendance() {
    let records = JSON.parse(localStorage.getItem("attendanceRecords")) || [];
    let table = document.getElementById("attendanceRecords");

    if (!table) return;

    table.innerHTML = records.map(r => `
        <tr>
            <td>${r.name}</td>
            <td>${r.course}</td>
            <td>${r.date}</td>
            <td>${r.status}</td>
        </tr>
    `).join("");
}
// =========================================================
//  MARKS MODULE
// =========================================================

// Load dropdowns
function loadMarksUI() {

    let students = JSON.parse(localStorage.getItem("students")) || [];
    let courses = JSON.parse(localStorage.getItem("courses")) || [];
    let marks = JSON.parse(localStorage.getItem("studentMarks")) || [];

    let studentSelect = document.getElementById("marksStudent");
    let courseSelect = document.getElementById("marksCourse");
    let table = document.getElementById("marksTable");

    if (!studentSelect || !courseSelect || !table) return;

    // Load students
    studentSelect.innerHTML = students
        .map(s => `<option value="${s.id}">${s.id} - ${s.name}</option>`)
        .join("");

    // Load courses
    courseSelect.innerHTML = courses
        .map(c => `<option value="${c}">${c}</option>`)
        .join("");

    loadMarksTable();
}

// Save marks
function saveMarks() {
    let studentID = document.getElementById("marksStudent").value;
    let course = document.getElementById("marksCourse").value;
    let marks = document.getElementById("marksValue").value;

    if (!marks) {
        alert("Please enter marks!");
        return;
    }

    let students = JSON.parse(localStorage.getItem("students")) || [];
    let marksData = JSON.parse(localStorage.getItem("studentMarks")) || [];

    let student = students.find(s => s.id === studentID);

    marksData.push({
        id: studentID,
        name: student.name,
        course: course,
        marks: marks
    });

    localStorage.setItem("studentMarks", JSON.stringify(marksData));

    alert("Marks saved!");
    loadMarksTable();
}

// Display marks
function loadMarksTable() {
    let table = document.getElementById("marksTable");
    let marksData = JSON.parse(localStorage.getItem("studentMarks")) || [];

    if (!table) return;

    table.innerHTML = marksData
        .map(m => `
            <tr>
                <td>${m.id}</td>
                <td>${m.name}</td>
                <td>${m.course}</td>
                <td>${m.marks}</td>
            </tr>
        `)
        .join("");
}
// ===============================
// MARKS MODULE
// ===============================

// Load students + courses + saved marks
function loadMarksUI() {
    console.log("Loading marks UI...");

    let students = JSON.parse(localStorage.getItem("students")) || [];
    let courses = JSON.parse(localStorage.getItem("courses")) || [];
    let marks = JSON.parse(localStorage.getItem("studentMarks")) || [];

    let studentSelect = document.getElementById("marksStudent");
    let courseSelect = document.getElementById("marksCourse");
    let table = document.getElementById("marksTable");

    // If page not loaded yet
    if (!studentSelect || !courseSelect || !table) {
        console.log("❌ Marks UI not ready yet.");
        return;
    }

    // Load student dropdown
    studentSelect.innerHTML = students
        .map(s => `<option value="${s.id}">${s.id} - ${s.name}</option>`)
        .join("");

    // Load courses dropdown
    courseSelect.innerHTML = courses
        .map(c => `<option value="${c}">${c}</option>`)
        .join("");

    // Load marks table
    loadMarksTable();
}


// Save marks for one student
function saveMarks() {
    let studentID = document.getElementById("marksStudent").value;
    let course = document.getElementById("marksCourse").value;
    let marksValue = document.getElementById("marksValue").value;

    if (!marksValue) {
        alert("Enter marks!");
        return;
    }

    let students = JSON.parse(localStorage.getItem("students")) || [];
    let marks = JSON.parse(localStorage.getItem("studentMarks")) || [];

    let student = students.find(s => s.id === studentID);

    marks.push({
        id: student.id,
        name: student.name,
        course: course,
        marks: marksValue
    });

    localStorage.setItem("studentMarks", JSON.stringify(marks));
    loadMarksTable();
    alert("Marks saved!");
}


// Display saved marks in table
function loadMarksTable() {
    let table = document.getElementById("marksTable");
    let marks = JSON.parse(localStorage.getItem("studentMarks")) || [];

    if (!table) return;

    table.innerHTML = marks.map(m => `
        <tr>
            <td>${m.id}</td>
            <td>${m.name}</td>
            <td>${m.course}</td>
            <td>${m.marks}</td>
        </tr>
    `).join("");
}
