const student = JSON.parse(localStorage.getItem("loggedStudent"));

let html = `
<table>
<tr><th>Day</th><th>Subject</th><th>Time</th></tr>
`;

student.timetable.forEach(row => {
    html += `
    <tr>
        <td>${row.day}</td>
        <td>${row.subject}</td>
        <td>${row.time}</td>
    </tr>`;
});

html += "</table>";

document.getElementById("timeTable").innerHTML = html;
