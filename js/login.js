// -------------------- SWAP ANIMATION --------------------
const left = document.querySelector(".left-section");
const right = document.querySelector(".right-section");

document.addEventListener("mousemove", (event) => {
    const mid = window.innerWidth / 2;

    if (event.clientX > mid) {
        left.classList.add("left-shift");
        right.classList.add("right-shift");
    } else {
        left.classList.remove("left-shift");
        right.classList.remove("right-shift");
    }
});


// -------------------- LOGIN VALIDATION --------------------
document.getElementById("loginBtn").addEventListener("click", function (e) {
    e.preventDefault();

    const role = document.getElementById("role").value;
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!role || !username || !password) {
        alert("Please fill all fields.");
        return;
    }


    // ----------------- LOAD REGISTERED STUDENTS -----------------
    let storedStudents = JSON.parse(localStorage.getItem("studentAccounts")) || [];

    // merge both (hardcoded + new)
    let allStudents = [...studentAccounts, ...storedStudents];


    // ----------------- STUDENT LOGIN -----------------
    if (role === "student") {
        const student = allStudents.find(
            s => s.username === username && s.password === password
        );

        if (student) {

            // ⭐ ADDED — Save the logged-in student for dashboard
            
            localStorage.setItem("loggedStudent", JSON.stringify(student));

            window.location.href = "student/student-dashboard.html";
            return;
        }

        alert("Invalid student credentials!");
        return;
    }


    // ----------------- ADMIN LOGIN -----------------
    if (role === "admin") {
        const admin = adminAccounts.find(
            a => a.username === username && a.password === password
        );

        if (admin) {

            // ⭐ ADDED — Save logged in admin (optional)
            localStorage.setItem("loggedAdmin", JSON.stringify(admin));

            window.location.href = "admin/admin-dashboard.html";
            return;
        }

        alert("Invalid admin credentials!");
        return;
    }

});

