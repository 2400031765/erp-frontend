const students = [
    { id: "STU1001", name: "Aarav Reddy", department: "CSE", year: 1 },
    { id: "STU1002", name: "Manasa Anantarapu", department: "CSE", year: 2 },
    { id: "STU1003", name: "Kiran Teja", department: "ECE", year: 1 },
    { id: "STU1004", name: "Sneha Patil", department: "CSE", year: 3 },
    { id: "STU1005", name: "Rishi Kumar", department: "IT", year: 2 },
    { id: "STU1006", name: "Shreya Das", department: "ECE", year: 3 },
    { id: "STU1007", name: "Nikhil Sharma", department: "CSE", year: 4 },
    { id: "STU1008", name: "Harsha Vardhan", department: "EEE", year: 2 },
    { id: "STU1009", name: "Rupa Sree", department: "CSE", year: 1 },
    { id: "STU1010", name: "Vishal Naidu", department: "IT", year: 3 }
];
const courses = [
    "Operating Systems",
    "Data Structures",
    "DBMS",
    "Computer Networks",
    "Java Programming",
    "Mathematics",
    "Python Programming"
];
const courseStudents = {
    "Operating Systems": ["STU1001", "STU1002", "STU1004", "STU1007"],
    "Data Structures": ["STU1002", "STU1003", "STU1005", "STU1009"],
    "DBMS": ["STU1001", "STU1004", "STU1010"],
    "Computer Networks": ["STU1007", "STU1008", "STU1006"],
    "Java Programming": ["STU1003", "STU1005", "STU1009"],
    "Mathematics": ["STU1001", "STU1009", "STU1010"],
    "Python Programming": ["STU1002", "STU1004", "STU1006"]
};
localStorage.setItem("students", JSON.stringify(students));
localStorage.setItem("courses", JSON.stringify(courses));
localStorage.setItem("courseStudents", JSON.stringify(courseStudents));
