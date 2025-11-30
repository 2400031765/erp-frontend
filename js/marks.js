const student = JSON.parse(localStorage.getItem("loggedStudent"));

if (!student) {
    alert("Login again!");
    location.href = "../index.html";
}

let html = `
<table>
<tr><th>Subject</th><th>Marks</th></tr>
`;

for (let sub in student.marks) {
    html += `<tr>
        <td>${sub}</td>
        <td>${student.marks[sub]}</td>
    </tr>`;
}

html += "</table>";

document.getElementById("marksTable").innerHTML = html;
