sems = [
        // Semester 1
        {
            isPending: true,
            subs: [
                { title: "LINEAR ALGEBRA AND CALCULUS", credit: 4, grade: "nill" },
                { title: "ENGINEERING PHYSICS A / ENGINEERING CHEMISTRY", credit: 4, grade: "nill" },
                { title: "ENGINEERING MECHANICS / ENGINEERING GRAPHICS", credit: 3, grade: "nill" },
                { title: "BASICS OF CIVIL & MECHANICAL ENGINEERING / BASICS OF ELECTRICAL & ELECTRONICS ENGINEERING", credit: 4, grade: "nill" },
                { title: "LIFE SKILLS", credit: 0, grade: "nill" },
                { title: "ENGINEERING PHYSICS LAB / ENGINEERING CHEMISTRY LAB", credit: 1, grade: "nill" },
                { title: "CIVIL & MECHANICAL WORKSHOP / ELECTRICAL & ELECTRONICS WORKSHOP", credit: 1, grade: "nill" }
            ]
        },

        // Semester 2
        {
            isPending: true,
            subs: [
                { title: "VECTOR CALCULUS, DIFFERENTIAL EQUATIONS AND TRANSFORMS", credit: 4, grade: "nill" },
                { title: "ENGINEERING PHYSICS A / ENGINEERING CHEMISTRY", credit: 4, grade: "nill" },
                { title: "ENGINEERING MECHANICS / ENGINEERING GRAPHICS", credit: 3, grade: "nill" },
                { title: "BASICS OF CIVIL & MECHANICAL ENGINEERING / BASICS OF ELECTRICAL & ELECTRONICS ENGINEERING", credit: 4, grade: "nill" },
                { title: "PROFESSIONAL COMMUNICATION", credit: 0, grade: "nill" },
                { title: "PROGRAMMING IN C", credit: 4, grade: "nill" },
                { title: "ENGINEERING PHYSICS LAB / ENGINEERING CHEMISTRY LAB", credit: 1, grade: "nill" },
                { title: "CIVIL & MECHANICAL WORKSHOP / ELECTRICAL & ELECTRONICS WORKSHOP", credit: 1, grade: "nill" }
            ]
        },

        // Semester 3
        {
            isPending: true,
            subs: [
                { title: "DISCRETE MATHEMATICAL STRUCTURES", credit: 4, grade: "nill" },
                { title: "DATA STRUCTURES", credit: 4, grade: "nill" },
                { title: "LOGIC SYSTEM DESIGN", credit: 4, grade: "nill" },
                { title: "OBJECT ORIENTED PROGRAMMING USING JAVA", credit: 4, grade: "nill" },
                { title: "DESIGN & ENGINEERING / PROFESSIONAL ETHICS", credit: 2, grade: "nill" },
                { title: "SUSTAINABLE ENGINEERING", credit: 0, grade: "nill" },
                { title: "DATA STRUCTURES LAB", credit: 2, grade: "nill" },
                { title: "OBJECT ORIENTED PROGRAMMING LAB (IN JAVA)", credit: 2, grade: "nill" }
            ]
        },

        // Semester 4
        {
            isPending: true,
            subs: [
                { title: "MATHEMATICAL FOUNDATIONS FOR SECURITY SYSTEMS", credit: 4, grade: "nill" },
                { title: "COMPUTER ORGANISATION AND ARCHITECTURE", credit: 4, grade: "nill" },
                { title: "DATABASE MANAGEMENT SYSTEMS", credit: 4, grade: "nill" },
                { title: "OPERATING SYSTEMS", credit: 4, grade: "nill" },
                { title: "DESIGN & ENGINEERING / PROFESSIONAL ETHICS", credit: 2, grade: "nill" },
                { title: "CONSTITUTION OF INDIA", credit: 0, grade: "nill" },
                { title: "SCRIPTING LANGUAGES FOR SECURITY", credit: 2, grade: "nill" },
                { title: "OS AND DBMS LAB", credit: 2, grade: "nill" }
            ]
        },

        // Semester 5
        {
            isPending: true,
            subs: [
                { title: "FORMAL LANGUAGES AND AUTOMATA THEORY", credit: 4, grade: "nill" },
                { title: "COMPUTER NETWORKS", credit: 4, grade: "nill" },
                { title: "SYSTEMS & NETWORK SECURITY", credit: 4, grade: "nill" },
                { title: "APPLIED CRYPTOGRAPHY", credit: 4, grade: "nill" },
                { title: "MANAGEMENT OF SOFTWARE SYSTEMS", credit: 3, grade: "nill" },
                { title: "DISASTER MANAGEMENT", credit: 0, grade: "nill" },
                { title: "CRYPTOGRAPHY LAB", credit: 2, grade: "nill" },
                { title: "SYSTEM & NETWORK SECURITY LAB", credit: 2, grade: "nill" }
            ]
        },

        // Semester 6
        {
            isPending: true,
            subs: [
                { title: "COMPILER DESIGN", credit: 4, grade: "nill" },
                { title: "CYBER FORENSICS", credit: 4, grade: "nill" },
                { title: "ALGORITHM ANALYSIS AND DESIGN", credit: 4, grade: "nill" },
                { title: "PROGRAM ELECTIVE I", credit: 3, grade: "nill" },
                { title: "INDUSTRIAL ECONOMICS & FOREIGN TRADE", credit: 3, grade: "nill" },
                { title: "COMPREHENSIVE COURSE WORK", credit: 1, grade: "nill" },
                { title: "CYBER FORENSICS LAB", credit: 2, grade: "nill" },
                { title: "MINIPROJECT", credit: 2, grade: "nill" }
            ]
        },

        // Semester 7
        {
            isPending: true,
            subs: [
                { title: "ETHICAL HACKING", credit: 3, grade: "nill" },
                { title: "PROGRAM ELECTIVE II", credit: 3, grade: "nill" },
                { title: "OPEN ELECTIVE", credit: 3, grade: "nill" },
                { title: "INDUSTRIAL SAFETY ENGINEERING", credit: 0, grade: "nill" },
                { title: "ETHICAL HACKING LAB", credit: 2, grade: "nill" },
                { title: "SEMINAR", credit: 2, grade: "nill" },
                { title: "PROJECT PHASE I", credit: 2, grade: "nill" }
            ]
        },

        // Semester 8
        {
            isPending: true,
            subs: [
                { title: "BIOMETRIC SECURITY", credit: 3, grade: "nill" },
                { title: "PROGRAM ELECTIVE III", credit: 3, grade: "nill" },
                { title: "PROGRAM ELECTIVE IV", credit: 3, grade: "nill" },
                { title: "PROGRAM ELECTIVE V", credit: 3, grade: "nill" },
                { title: "COMPREHENSIVE COURSE VIVA", credit: 1, grade: "nill" },
                { title: "PROJECT PHASE II", credit: 4, grade: "nill" }
            ]
            
        }
    ];

const GradePoints = { S: 10, "A+": 9, A: 8.5, "B+": 8, B: 7.5, "C+": 7, C: 6.5, D: 6, P: 5.5, LP: 4, F: 0, nill: 0 };

document.getElementById("acceptData").addEventListener("change", (event) => {
    const file = event.target.files[0];
    if(!file) return;

    const reader = new FileReader();

    reader.onload = (e) => {
        try {
            sems = JSON.parse(e.target.result);
            printSubjects();
        } catch {
            alert("Invalid JSON file.")
        }
    };

    reader.readAsText(file);
})

printSubjects();

function printSubjects() {
    let content = "";

    for (const [i, sem] of sems.entries()) {
        content += `
            <h1>Semester ${i+1}</h1>
            <table>
                <tr>
                    <th>Sl.no</th>
                    <th>Subject</th>
                    <th>Credit</th>
                    <th>Grade</th>
                </tr>`;
        for (const [j, sub] of sem.subs.entries()) {
           content += `<tr>
                    <td class="aligncolcenter">${j+1}</td>
                    <td>${sub.title}</td>
                    <td class="aligncolcenter">${sub.credit}</td>
                    <td>
                        <select name="Grade" id="sub${i}${j}" size="1">
                            <option value="nill" ${sub.grade === "null" ? "selected" : ""}>--</option>
                            <option value="S" ${sub.grade === "S" ? "selected" : ""}>S</option>
                            <option value="A+" ${sub.grade === "A+" ? "selected" : ""}>A+</option>
                            <option value="A" ${sub.grade === "A" ? "selected" : ""}>A</option>
                            <option value="B+" ${sub.grade === "B+" ? "selected" : ""}>B+</option>
                            <option value="B" ${sub.grade === "B" ? "selected" : ""}>B</option>
                            <option value="C+" ${sub.grade === "C+" ? "selected" : ""}>C+</option>
                            <option value="C" ${sub.grade === "C" ? "selected" : ""}>C</option>
                            <option value="D" ${sub.grade === "D" ? "selected" : ""}>D</option>
                            <option value="P" ${sub.grade === "P" ? "selected" : ""}>P</option>
                            <option value="LP" ${sub.grade === "LP" ? "selected" : ""}>LP</option>
                            <option value="F" ${sub.grade === "F" ? "selected" : ""}>F</option>
                        </select>
                    </td>
                    </tr>`;
        }
        content += `
                </table>
                <br>
                <div class="calcbutncontainer">
                <button class="calcBtn" onclick="calcSGPA(${i})" >Calculate</button>
                <h2 id="sgpa${i}">0.00</h2>
                </div>`;
    }
    document.getElementById("tables").innerHTML = content;

    for(let i = 0; i < sems.length; i++) {
        calcSGPA(i);
    }
}

function calcSGPA(index) {
    let totalCredits = 0;
    let earnedCredits = 0;

    for(let i = 0; i < sems[index].subs.length; i++) {
        userGrade = document.getElementById(`sub${index}${i}`).value;

        if(userGrade == "nill") {
            document.getElementById(`sub${index}${i}`).value == "F"
        }

        sems[index].subs[i].grade = userGrade;        
        earnedCredits += GradePoints[userGrade] * sems[index].subs[i].credit;
        totalCredits += sems[index].subs[i].credit;
    }
    let sgpa = earnedCredits / totalCredits;

    document.getElementById(`sgpa${index}`).textContent = sgpa.toFixed(2);
   
    // calcCGPA();
}

// function calcCGPA() {

// }

function downloadData() {
    const json = JSON.stringify(sems, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "grades.json";
    a.click();

    URL.revokeObjectURL(url);
}