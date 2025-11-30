function goto(page) {
    window.location.href = page;
}

function logout() {
    window.location.href = "../index.html";
}
const loggedStudent = JSON.parse(localStorage.getItem("loggedStudent"));

document.getElementById("studentName").innerText = loggedStudent.name;
document.getElementById("studentGrade").innerText = loggedStudent.grade;
