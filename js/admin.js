function loadPage(page) {
    fetch(`partials/${page}`)
        .then(res => res.text())
        .then(data => {
            document.getElementById("admin-content").innerHTML = data;
            if (page === "manage-students.html") renderStudents();
            if (page === "manage-courses.html") renderCourses();
            if (page === "attendance.html") renderAttendance();
        })
        .catch(err => console.error("Load error:", err));
}

/* ---------- STUDENTS CRUD ---------- */

function renderStudents() {
    const tbody = document.querySelector("#studentsTable tbody");
    tbody.innerHTML = "";

    adminStudents.forEach(s => {
        tbody.innerHTML += `
            <tr>
                <td>${s.id}</td>
                <td>${s.name}</td>
                <td>${s.grade}</td>
                <td>${s.section}</td>
                <td>
                    <button onclick="editStudent(${s.id})">Edit</button>
                    <button onclick="deleteStudent(${s.id})">Delete</button>
                </td>
            </tr>
        `;
    });
}

function deleteStudent(id) {
    adminStudents = adminStudents.filter(s => s.id !== id);
    renderStudents();
}

/* ---------- COURSES ---------- */

function renderCourses() {
    const tbody = document.querySelector("#coursesTable tbody");
    tbody.innerHTML = "";

    adminCourses.forEach(c => {
        tbody.innerHTML += `
            <tr>
                <td>${c.id}</td>
                <td>${c.name}</td>
                <td>${c.grade}</td>
                <td>${c.teacher}</td>
            </tr>
        `;
    });
}

/* ---------- ATTENDANCE ---------- */

function renderAttendance() {
    let select = document.getElementById("studentSelect");
    let list = document.getElementById("attendanceList");

    list.innerHTML = "<p>Select a student to load attendance</p>";

    select.innerHTML = adminStudents
        .map(s => `<option value="${s.id}">${s.name}</option>`)
        .join("");

    select.onchange = () => {
        let id = select.value;
        let student = adminAttendance[id];

        if (!student) {
            list.innerHTML = "No attendance found.";
            return;
        }

        let html = `
            <table border="1" width="70%">
                <tr><th>Subject</th><th>Attendance (%)</th><th>Save</th></tr>
        `;

        for (let sub in student) {
            html += `
            <tr>
                <td>${sub}</td>
                <td>
                    <input id="att-${sub}" type="number" value="${student[sub]}" min="0" max="100">
                </td>
                <td><button class="save-btn" onclick="saveAttendance('${id}','${sub}')">Save</button></td>

            </tr>`;
        }

        html += "</table>";

        list.innerHTML = html;
    };
}

function saveAttendance(id, subject) {
    let input = document.getElementById("att-" + subject).value;
    adminAttendance[id][subject] = Number(input);

    alert("Attendance updated!");
}
