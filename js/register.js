function registerUser() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let username = document.getElementById("username").value.trim();
    let pass = document.getElementById("password").value.trim();
    let confirm = document.getElementById("confirm").value.trim();
    let role = document.getElementById("role").value.trim();
    let grade = document.getElementById("grade").value.trim();

    if (!name || !email || !username || !pass || !confirm || !role || !grade) {
        alert("Please fill all required fields.");
        return;
    }

    if (pass !== confirm) {
        alert("Passwords do not match!");
        return;
    }

    // Load old accounts from localStorage (or empty array)
    let storedAccounts = JSON.parse(localStorage.getItem("studentAccounts")) || [];

    // Prevent duplicate username
    if (storedAccounts.some(u => u.username === username)) {
        alert("Username already exists. Try a different one.");
        return;
    }

    // Create new student
    const newStudent = {
        username: username,
        password: pass,
        name: name,
        email: email,
        grade: grade,
        id: "STU" + Math.floor(1000 + Math.random() * 9000),
        subjects: []
    };

    // Add to localStorage list
    storedAccounts.push(newStudent);

    // Save back to localStorage
    localStorage.setItem("studentAccounts", JSON.stringify(storedAccounts));

    alert("Registration Successful!\nYou can now login.");

    window.location.href = "index.html"; // 🔥 go back to login
}
function registerUser() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let username = document.getElementById("username").value.trim();
    let pass = document.getElementById("password").value.trim();
    let confirm = document.getElementById("confirm").value.trim();
    let grade = document.getElementById("grade").value.trim();

    if (!name || !email || !username || !pass || !confirm || !grade) {
        alert("Please fill all the required fields.");
        return;
    }

    if (pass !== confirm) {
        alert("Passwords do not match!");
        return;
    }

    // Load old accounts
    let oldStudents = JSON.parse(localStorage.getItem("studentAccounts")) || [];

    // Create new student
    let newStudent = {
        username,
        password: pass,
        name,
        grade,
        id: "STU" + Math.floor(Math.random() * 9000 + 1000)
    };

    oldStudents.push(newStudent);

    // Save back
    localStorage.setItem("studentAccounts", JSON.stringify(oldStudents));

    alert("Registration Successful! You can now login.");
    window.location.href = "index.html";
}
