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


// ==========================================================
// ⭐ SAMPLE FACULTY ACCOUNTS  (added only once)
// ==========================================================
if (!localStorage.getItem("facultyAccounts")) {
    const sampleFaculty = [
        { id: "FAC2001", name: "Dr. Srinivas Rao", username: "fac2001", password: "fac2001", dept: "CSE" },
        { id: "FAC2002", name: "Prof. Manjula Devi", username: "fac2002", password: "fac2002", dept: "CSE" },
        { id: "FAC2003", name: "Dr. Rajesh Kumar", username: "fac2003", password: "fac2003", dept: "ECE" },
        { id: "FAC2004", name: "Dr. Swetha Reddy", username: "fac2004", password: "fac2004", dept: "IT" },
        { id: "FAC2005", name: "Prof. Varun Sai", username: "fac2005", password: "fac2005", dept: "EEE" }
    ];
    localStorage.setItem("facultyAccounts", JSON.stringify(sampleFaculty));
}


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
            localStorage.setItem("loggedAdmin", JSON.stringify(admin));
            window.location.href = "admin/admin-dashboard.html";
            return;
        }

        alert("Invalid admin credentials!");
        return;
    }


    // =====================================================
    // ⭐ NEW: FACULTY LOGIN
    // =====================================================
    if (role === "faculty") {
        const facultyList = JSON.parse(localStorage.getItem("facultyAccounts")) || [];

        const fac = facultyList.find(
            f => f.username === username && f.password === password
        );

        if (fac) {
            localStorage.setItem("loggedFaculty", JSON.stringify(fac));
            window.location.href = "faculty/faculty-dashboard.html";
            return;
        }

        alert("Invalid faculty credentials!");
        return;
    }

});
