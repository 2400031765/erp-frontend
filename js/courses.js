const student = JSON.parse(localStorage.getItem("loggedStudent"));

if (!student) location.href = "../index.html";

let html = `
<table>
<tr><th>Course</th><th>Faculty</th><th>Credits</th></tr>
`;

student.courses.forEach(c => {
    html += `
    <tr>
        <td>${c.course}</td>
        <td>${c.faculty}</td>
        <td>${c.credits}</td>
    </tr>`;
});

html += "</table>";

document.getElementById("courseTable").innerHTML = html;
