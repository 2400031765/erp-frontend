/* ---- 8 STUDENTS ---- */
var adminStudents = [
    { id: 1, name: "Rahul Sharma", grade: 6, section: "A" },
    { id: 2, name: "Ananya Reddy", grade: 7, section: "B" },
    { id: 3, name: "Vikas Rao", grade: 8, section: "C" },
    { id: 4, name: "Priya S", grade: 6, section: "A" },
    { id: 5, name: "Manoj Verma", grade: 7, section: "C" },
    { id: 6, name: "Harini Devi", grade: 8, section: "B" },
    { id: 7, name: "Amit Kumar", grade: 6, section: "B" },
    { id: 8, name: "Sneha Gupta", grade: 7, section: "A" }
];

/* ---- COURSES ---- */
var adminCourses = [
    { id: 101, name: "Mathematics", grade: 6, teacher: "Mrs. Rao" },
    { id: 102, name: "Science", grade: 7, teacher: "Mr. Reddy" },
    { id: 103, name: "English", grade: 8, teacher: "Ms. Priya" }
];

/* ---- SUBJECT-WISE ATTENDANCE ---- */
var adminAttendance = {
    1: { Math: 90, Science: 85, English: 92 },
    2: { Math: 88, Science: 82, English: 78 },
    3: { Math: 95, Science: 89, English: 91 },
    4: { Math: 75, Science: 80, English: 70 },
    5: { Math: 68, Science: 72, English: 81 },
    6: { Math: 92, Science: 94, English: 89 },
    7: { Math: 85, Science: 88, English: 82 },
    8: { Math: 79, Science: 84, English: 77 }
};
// -------------------------
// ADMIN LOGIN ACCOUNTS
// -------------------------

const adminAccounts = [
    {
        id: "ADM001",
        username: "admin",
        password: "admin123",
        name: "Super Admin",
        role: "administrator"
    },
    {
        id: "ADM002",
        username: "principal",
        password: "principal123",
        name: "School Principal",
        role: "administrator"
    },
    {
        id: "ADM003",
        username: "management",
        password: "manage123",
        name: "Management User",
        role: "administrator"
    },
    {
        id: "ADM004",
        username: "coordinator",
        password: "coord123",
        name: "Academic Coordinator",
        role: "administrator"
    },
    {
        id: "ADM005",
        username: "office",
        password: "office123",
        name: "Office Staff",
        role: "administrator"
    },
    {
        id: "ADM006",
        username: "examdept",
        password: "exam123",
        name: "Examination Dept",
        role: "administrator"
    },
    {
        id: "ADM007",
        username: "staff1",
        password: "staff123",
        name: "Staff Admin 1",
        role: "administrator"
    },
    {
        id: "ADM008",
        username: "staff2",
        password: "staff123",
        name: "Staff Admin 2",
        role: "administrator"
    }
];
