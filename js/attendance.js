const student = JSON.parse(localStorage.getItem("loggedStudent"));

let html = `
<table>
<tr><th>Subject</th><th>Present</th><th>Absent</th><th>Percentage</th></tr>
`;

for (let sub in student.attendance) {
    let p = student.attendance[sub].present;
    let a = student.attendance[sub].absent;
    let percent = Math.round((p / (p + a)) * 100);

    html += `
    <tr>
        <td>${sub}</td>
        <td>${p}</td>
        <td>${a}</td>
        <td>${percent}%</td>
    </tr>`;
}

html += "</table>";

document.getElementById("attendanceTable").innerHTML = html;
