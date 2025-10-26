// Task 1: Signup Form
const submitForm = () => {
    const email = document.getElementById("input").value;
    const password = document.getElementById("password").value;
    document.getElementById("form").innerHTML = `
        <input type="email" id="input" placeholder="Email"/>
        <input type="password" id="password" placeholder="Password"/>
        <button id="btn" onclick="submitForm()">Submit</button>
        <h3>Submitted Information</h3>
        <p>Email: ${email}</p>
        <p>Password: ${password}</p>
    `;
};

// Task 2: Read More Functionality
const save = () => {
    const text = document.getElementById("textInput");
    const content = document.getElementById("content");

    if (text.value.trim() === "") return;
    
    // Create a container for text + see more button
    const container = document.createElement("div");
    container.className = "text-container";

    const fullText = text.value;
    const shortText = fullText.length > 50 ? fullText.substring(0, 50) + "..." : fullText;

    const para = document.createElement("p");
    para.textContent = shortText;

    // Only show See More if text is long
    if (fullText.length > 50) {
        const btn = document.createElement("button");
        btn.className = "see-more-btn";
        btn.textContent = "See More";
        btn.onclick = () => {
            if (btn.textContent === "See More") {
                para.textContent = fullText;
                btn.textContent = "See Less";
            } else {
                para.textContent = shortText;
                btn.textContent = "See More";
            }
        };
        container.appendChild(para);
        container.appendChild(btn);
    } else {
        container.appendChild(para);
    }

    content.appendChild(container);
    text.value = "";
};

// Task 3: Student Table Management
let students = [];

document.getElementById('studentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const student = {
        name: document.getElementById('studentName').value,
        roll: document.getElementById('studentRoll').value,
        class: document.getElementById('studentClass').value,
        age: document.getElementById('studentAge').value
    };
    
    students.push(student);
    displayStudents();
    document.getElementById('studentForm').reset();
});

function displayStudents() {
    const tbody = document.getElementById('studentTableBody');
    tbody.innerHTML = '';
    
    students.forEach((student, index) => {
        const row = tbody.insertRow();
        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.roll}</td>
            <td>${student.class}</td>
            <td>${student.age}</td>
            <td>
                <button onclick="editStudent(${index})">Edit</button>
                <button onclick="deleteStudent(${index})">Delete</button>
            </td>
        `;
    });
}

function deleteStudent(index) {
    if (confirm('Are you sure you want to delete this student?')) {
        students.splice(index, 1);
        displayStudents();
    }
}

function editStudent(index) {
    const student = students[index];
    
    document.getElementById('editIndex').value = index;
    document.getElementById('editName').value = student.name;
    document.getElementById('editRoll').value = student.roll;
    document.getElementById('editClass').value = student.class;
    document.getElementById('editAge').value = student.age;
    
    document.getElementById('editFormContainer').style.display = 'block';
    document.getElementById('studentForm').style.display = 'none';
}

document.getElementById('editForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const index = document.getElementById('editIndex').value;
    
    students[index] = {
        name: document.getElementById('editName').value,
        roll: document.getElementById('editRoll').value,
        class: document.getElementById('editClass').value,
        age: document.getElementById('editAge').value
    };
    
    displayStudents();
    cancelEdit();
});

function cancelEdit() {
    document.getElementById('editFormContainer').style.display = 'none';
    document.getElementById('studentForm').style.display = 'block';
    document.getElementById('editForm').reset();
}