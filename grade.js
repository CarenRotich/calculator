const MAX_STUDENTS = 20;
const MAX_ASSIGNMENT_SCORE = 10;
const MAX_CAT_SCORE = 30;
const MAX_FINAL_EXAM_SCORE = 50;
const MAX_TOTAL_SCORE = 100;


function initializeStudentInputs() {
    const studentInputsDiv = document.getElementById("student-inputs");
    studentInputsDiv.innerHTML = ""; // Clear any existing inputs

    for (let i = 1; i <= MAX_STUDENTS; i++) {
        studentInputsDiv.innerHTML += `
            <div class="student-row">
                <label>${i}</label>
                <label>Name: <input type="text" id="name${i}" class="student-input"></label>
                <label>Assignment 1: <input type="number" id="assignment1-${i}" class="student-input" min="0" max="${MAX_ASSIGNMENT_SCORE}"></label>
                <label>Assignment 2: <input type="number" id="assignment2-${i}" class="student-input" min="0" max="${MAX_ASSIGNMENT_SCORE}"></label>
                <label>CAT: <input type="number" id="cat-${i}" class="student-input" min="0" max="${MAX_CAT_SCORE}"></label>
                <label>Final Exam: <input type="number" id="finalExam-${i}" class="student-input" min="0" max="${MAX_FINAL_EXAM_SCORE}"></label>
            </div>
        `;
    }
}


window.onload = initializeStudentInputs;

/*Calculate grades and display results*/
function calculateGrades() {
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = ""; // Clear previous results

    for (let i = 1; i <= MAX_STUDENTS; i++) {
        try {
        
            const name = document.getElementById(`name${i}`).value.trim();
            const assignment1 = parseFloat(document.getElementById(`assignment1-${i}`).value);
            const assignment2 = parseFloat(document.getElementById(`assignment2-${i}`).value);
            const cat = parseFloat(document.getElementById(`cat-${i}`).value);
            const finalExam = parseFloat(document.getElementById(`finalExam-${i}`).value);

            
            if (!name) throw new Error(`Name is missing for student ${i}.`);
            if (isNaN(assignment1) || assignment1 < 0 || assignment1 > MAX_ASSIGNMENT_SCORE) throw new Error(`Assignment 1 score must be between 0 and ${MAX_ASSIGNMENT_SCORE} for student ${i}.`);
            if (isNaN(assignment2) || assignment2 < 0 || assignment2 > MAX_ASSIGNMENT_SCORE) throw new Error(`Assignment 2 score must be between 0 and ${MAX_ASSIGNMENT_SCORE} for student ${i}.`);
            if (isNaN(cat) || cat < 0 || cat > MAX_CAT_SCORE) throw new Error(`CAT score must be between 0 and ${MAX_CAT_SCORE} for student ${i}.`);
            if (isNaN(finalExam) || finalExam < 0 || finalExam > MAX_FINAL_EXAM_SCORE) throw new Error(`Final Exam score must be between 0 and ${MAX_FINAL_EXAM_SCORE} for student ${i}.`);

            // Calculate total score
            const totalScore = assignment1 + assignment2 + cat + finalExam;

            // Ensure total score does not exceed the maximum allowable score
            if (totalScore > MAX_TOTAL_SCORE) throw new Error(`Total score exceeds the maximum allowed score of ${MAX_TOTAL_SCORE} for student ${i}.`);

            // Determine grade
            let grade;
            if (totalScore >= 70) grade = 'A';
            else if (totalScore >= 60) grade = 'B';
            else if (totalScore >= 50) grade = 'C';
            else if (totalScore >= 40) grade = 'D';
            else grade = 'F';

            // Display result
            resultsDiv.innerHTML += `
                <p><strong>${name}</strong>: Total Score = ${totalScore}, Grade = ${grade}</p>
            `;
        } catch (error) {
            // Display error message
            resultsDiv.innerHTML += `<p style="color:red;">Error for Student ${i}: ${error.message}</p>`;
        }
    }
}
