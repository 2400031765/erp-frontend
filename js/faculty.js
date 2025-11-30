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
