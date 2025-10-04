// Assignment #49-52 - JAVASCRIPT EVENTS (Forms)
// All tasks combined in one file

// ==================== TASK 1: Signup Form ====================
function handleSignupSubmit(e) {
    e.preventDefault();
    
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value || 'Not specified';
    const country = document.getElementById('country')?.value || 'Not specified';
    
    const displayArea = document.getElementById('displayData');
    if (displayArea) {
        displayArea.innerHTML = `
            <h2>Registration Successful!</h2>
            <div class="user-info">
                <p><strong>First Name:</strong> ${firstName}</p>
                <p><strong>Last Name:</strong> ${lastName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Gender:</strong> ${gender}</p>
                <p><strong>Country:</strong> ${country}</p>
            </div>
        `;
        displayArea.style.display = 'block';
    }
}

// ==================== TASK 2: Read More Functionality ====================
function toggleReadMore(btn) {
    const content = btn.previousElementSibling;
    const fullText = content.querySelector('.full-text');
    
    if (fullText.style.display === 'none' || fullText.style.display === '') {
        fullText.style.display = 'inline';
        btn.textContent = 'Read Less';
    } else {
        fullText.style.display = 'none';
        btn.textContent = 'Read More';
    }
}

// ==================== TASK 3: Student Details Table with Edit/Delete ====================
let studentData = [];
let editingIndex = -1;

function addStudent(e) {
    e.preventDefault();
    
    const name = document.getElementById('studentName').value;
    const age = document.getElementById('studentAge').value;
    const grade = document.getElementById('studentGrade').value;
    const email = document.getElementById('studentEmail').value;
    
    if (editingIndex === -1) {
        // Add new student
        studentData.push({ name, age, grade, email });
    } else {
        // Update existing student
        studentData[editingIndex] = { name, age, grade, email };
        editingIndex = -1;
        document.getElementById('submitBtn').textContent = 'Add Student';
    }
    
    document.getElementById('studentForm').reset();
    hideEditForm();
    renderStudentTable();
}

function renderStudentTable() {
    const tbody = document.querySelector('#studentDataTable tbody');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    studentData.forEach(function(student, index) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.grade}</td>
            <td>${student.email}</td>
            <td>
                <button class="edit-btn" onclick="editStudent(${index})">Edit</button>
                <button class="delete-btn" onclick="deleteStudent(${index})">Delete</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function deleteStudent(index) {
    if (confirm('Are you sure you want to delete this student?')) {
        studentData.splice(index, 1);
        renderStudentTable();
    }
}

function editStudent(index) {
    const student = studentData[index];
    
    document.getElementById('studentName').value = student.name;
    document.getElementById('studentAge').value = student.age;
    document.getElementById('studentGrade').value = student.grade;
    document.getElementById('studentEmail').value = student.email;
    
    editingIndex = index;
    document.getElementById('submitBtn').textContent = 'Update Student';
    
    showEditForm();
}

function showEditForm() {
    const editFormSection = document.getElementById('editFormSection');
    if (editFormSection) {
        editFormSection.style.display = 'block';
    }
}

function hideEditForm() {
    const editFormSection = document.getElementById('editFormSection');
    if (editFormSection) {
        editFormSection.style.display = 'none';
    }
    editingIndex = -1;
}

function cancelEdit() {
    document.getElementById('studentForm').reset();
    hideEditForm();
    editingIndex = -1;
    document.getElementById('submitBtn').textContent = 'Add Student';
}

// ==================== Initialize All Tasks ====================
document.addEventListener('DOMContentLoaded', function() {
    // Task 1: Signup form
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', handleSignupSubmit);
    }
    
    // Task 3: Student form
    const studentForm = document.getElementById('studentForm');
    if (studentForm) {
        studentForm.addEventListener('submit', addStudent);
    }
    
    renderStudentTable();
});