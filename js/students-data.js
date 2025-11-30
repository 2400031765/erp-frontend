const studentAccounts = [
    {
        username: "stu1001",
        password: "pass1001",
        name: "Rahul Sharma",
        id: "STU1001",

        attendance: {
            "Data Structures": { present: 42, absent: 4 },
            "Database Systems": { present: 38, absent: 6 },
            "Operating Systems": { present: 40, absent: 8 }
        },

        marks: {
            "Data Structures": 89,
            "Database Systems": 76,
            "Operating Systems": 82
        },

        courses: [
            { course: "Data Structures", faculty: "Dr. Mehta", credits: 4 },
            { course: "Database Systems", faculty: "Dr. Prakash", credits: 3 },
            { course: "Operating Systems", faculty: "Dr. Anita", credits: 4 }
        ],

        timetable: [
            { day: "Monday", subject: "Data Structures", time: "9:00 AM" },
            { day: "Tuesday", subject: "Database Systems", time: "10:00 AM" },
            { day: "Wednesday", subject: "Operating Systems", time: "11:00 AM" }
        ],

        cgpa: 8.5
    },

    {
        username: "stu1002",
        password: "pass1002",
        name: "Ananya Reddy",
        id: "STU1002",

        attendance: {
            "AI": { present: 40, absent: 5 },
            "ML": { present: 37, absent: 4 },
            "Web Dev": { present: 45, absent: 2 }
        },

        marks: {
            "AI": 78,
            "ML": 82,
            "Web Dev": 90
        },

        courses: [
            { course: "AI", faculty: "Dr. Rao", credits: 4 },
            { course: "ML", faculty: "Dr. Suma", credits: 3 },
            { course: "Web Dev", faculty: "Dr. Neha", credits: 4 }
        ],

        timetable: [
            { day: "Monday", subject: "AI", time: "9 AM" },
            { day: "Thursday", subject: "ML", time: "10 AM" }
        ],

        cgpa: 8.9
    },

    {
        username: "stu1003",
        password: "pass1003",
        name: "Vikas Rao",
        id: "STU1003",

        attendance: {
            "Networking": { present: 39, absent: 7 },
            "Cloud": { present: 42, absent: 3 }
        },

        marks: {
            "Networking": 72,
            "Cloud": 85
        },

        courses: [
            { course: "Networking", faculty: "Dr. Arvind", credits: 3 },
            { course: "Cloud", faculty: "Dr. Basha", credits: 4 }
        ],

        timetable: [
            { day: "Tuesday", subject: "Networking", time: "9 AM" },
            { day: "Friday", subject: "Cloud", time: "1 PM" }
        ],

        cgpa: 7.8
    },

    {
        username: "stu1004",
        password: "pass1004",
        name: "Manasa Anantarapu",
        id: "STU1004",

        attendance: {
            "Java": { present: 44, absent: 3 },
            "Python": { present: 40, absent: 5 }
        },

        marks: {
            "Java": 92,
            "Python": 88
        },

        courses: [
            { course: "Java", faculty: "Dr. Shalini", credits: 4 },
            { course: "Python", faculty: "Dr. Reddy", credits: 3 }
        ],

        timetable: [
            { day: "Wednesday", subject: "Java", time: "9 AM" },
            { day: "Friday", subject: "Python", time: "10 AM" }
        ],

        cgpa: 9.2
    }
];
