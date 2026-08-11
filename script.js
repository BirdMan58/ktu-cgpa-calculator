sems = [];

fetch('./departments/cy.json')
  .then(response => response.json())
  .then(data => {
    sems = data;
    printSubjects();
  })
  .catch(error => {
    console.error('Error loading JSON:', error);
  });

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

function printSubjects() {
    let content = "";

    for (const [i, sem] of sems.entries()) {
        content += `
            <h1 id="semHeader${i}">Semester ${i+1}</h1>
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
                <h2 id="sgpa${i}">SGPA 0.00</h2>
                <button class="calcBtn" onclick="calcSGPA(${i})" >Calculate</button>
                </div>`;
    }
    document.getElementById("tables").innerHTML = content;

    for(let i = 0; i < sems.length; i++) {
        calcSGPA(i);
        if(sems[i].isPending) {
            document.getElementById(`semHeader${i}`).textContent = `Semester ${i+1} (pending)`;
        }
    }
}

function calcSGPA(index) {
    let totalCredits = 0;
    let earnedCredits = 0;

    for(let i = 0; i < sems[index].subs.length; i++) {
        userGrade = document.getElementById(`sub${index}${i}`).value;

        if(userGrade != "nill") {
            sems[index].isPending = false;
            document.getElementById(`semHeader${index}`).textContent = `Semester ${index+1}`;
        }

        sems[index].subs[i].grade = userGrade;        
        earnedCredits += GradePoints[userGrade] * sems[index].subs[i].credit;
        totalCredits += sems[index].subs[i].credit;
    }
    let sgpa = earnedCredits / totalCredits;

    document.getElementById(`sgpa${index}`).textContent = `SGPA: ${sgpa.toFixed(2)}`;
   
    calcCGPA();
}

function calcCGPA() {
    let totalCredits = 0;
    let earnedCredits = 0;

    for(let index = 0; index < sems.length; index++) {
        if(sems[index].isPending) {
            continue;
        }

        for(let i = 0; i < sems[index].subs.length; i++) {
            userGrade = document.getElementById(`sub${index}${i}`).value;

            sems[index].subs[i].grade = userGrade;        
            earnedCredits += GradePoints[userGrade] * sems[index].subs[i].credit;
            totalCredits += sems[index].subs[i].credit;
        }
    }
    
    let cgpa = (totalCredits != 0) ? earnedCredits / totalCredits : 0;

    document.getElementById("cgpah1").textContent = `CGPA: ${cgpa.toFixed(2)}`;
}

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

function toggleTheme() {    
    document.documentElement.classList.toggle("dark");
}