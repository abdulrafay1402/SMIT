// Assignment #58-67 - JAVASCRIPT DOM
// All tasks combined in one file

// ==================== QUESTION 1 ====================

// i. Get element of id "main-content" and assign them in a variable
function task1_i() {
    const mainContent = document.getElementById('main-content');
    console.log('i. Main Content Element:', mainContent);
    return mainContent;
}

// ii. Display all child elements of "main-content" element
function task1_ii() {
    const mainContent = document.getElementById('main-content');
    const children = mainContent.children;
    
    console.log('ii. Child Elements of main-content:');
    for (let i = 0; i < children.length; i++) {
        console.log(children[i]);
    }
    
    // Display in browser
    const output = document.getElementById('output1_ii');
    if (output) {
        output.innerHTML = '<h3>Child Elements of main-content:</h3>';
        for (let i = 0; i < children.length; i++) {
            output.innerHTML += `<p>Child ${i + 1}: ${children[i].tagName} - ${children[i].textContent}</p>`;
        }
    }
}

// iii. Get all elements of class "render" and show their innerHTML in browser
function task1_iii() {
    const renderElements = document.getElementsByClassName('render');
    
    console.log('iii. Elements with class "render":');
    
    const output = document.getElementById('output1_iii');
    if (output) {
        output.innerHTML = '<h3>innerHTML of elements with class "render":</h3>';
        for (let i = 0; i < renderElements.length; i++) {
            console.log(renderElements[i].innerHTML);
            output.innerHTML += `<p>${renderElements[i].innerHTML}</p>`;
        }
    }
}

// iv. Fill input value whose element id first-name using javascript
function task1_iv() {
    const firstNameInput = document.getElementById('first-name');
    if (firstNameInput) {
        firstNameInput.value = 'John';
        console.log('iv. First name filled:', firstNameInput.value);
    }
}

// v. Repeat part iv for id "last-name" and "email"
function task1_v() {
    const lastNameInput = document.getElementById('last-name');
    const emailInput = document.getElementById('email');
    
    if (lastNameInput) {
        lastNameInput.value = 'Doe';
        console.log('v. Last name filled:', lastNameInput.value);
    }
    
    if (emailInput) {
        emailInput.value = 'john.doe@example.com';
        console.log('v. Email filled:', emailInput.value);
    }
}

// ==================== QUESTION 2 ====================

// i. What is node type of element having id "form-content"
function task2_i() {
    const formContent = document.getElementById('form-content');
    const nodeType = formContent.nodeType;
    
    console.log('2.i. Node type of "form-content":', nodeType);
    
    const output = document.getElementById('output2_i');
    if (output) {
        output.innerHTML = `<h3>Node Type of "form-content":</h3>
                           <p>Node Type: ${nodeType} (Element Node)</p>`;
    }
}

// ii. Show node type of element having id "lastName" and its child node
function task2_ii() {
    const lastName = document.getElementById('lastName');
    const nodeType = lastName.nodeType;
    const firstChild = lastName.firstChild;
    const childNodeType = firstChild ? firstChild.nodeType : 'No child';
    
    console.log('2.ii. Node type of "lastName":', nodeType);
    console.log('2.ii. Child node type:', childNodeType);
    
    const output = document.getElementById('output2_ii');
    if (output) {
        output.innerHTML = `<h3>Node Type of "lastName" and its child:</h3>
                           <p>Element Node Type: ${nodeType} (Element Node)</p>
                           <p>Child Node Type: ${childNodeType} (Text Node)</p>`;
    }
}

// iii. Update child node of element having id "lastName"
function task2_iii() {
    const lastName = document.getElementById('lastName');
    if (lastName && lastName.firstChild) {
        lastName.firstChild.nodeValue = 'Last Name: Smith';
        console.log('2.iii. Updated child node:', lastName.firstChild.nodeValue);
    }
    
    const output = document.getElementById('output2_iii');
    if (output) {
        output.innerHTML = `<h3>Updated Child Node:</h3>
                           <p>${lastName.textContent}</p>`;
    }
}

// iv. Get First and last child of id "main-content"
function task2_iv() {
    const mainContent = document.getElementById('main-content');
    const firstChild = mainContent.firstChild;
    const lastChild = mainContent.lastChild;
    
    console.log('2.iv. First child:', firstChild);
    console.log('2.iv. Last child:', lastChild);
    
    const output = document.getElementById('output2_iv');
    if (output) {
        output.innerHTML = `<h3>First and Last Child of "main-content":</h3>
                           <p>First Child: ${firstChild.nodeName} - ${firstChild.textContent?.trim() || 'Empty'}</p>
                           <p>Last Child: ${lastChild.nodeName} - ${lastChild.textContent?.trim() || 'Empty'}</p>`;
    }
}

// v. Get next and previous siblings of id "lastName"
function task2_v() {
    const lastName = document.getElementById('lastName');
    const nextSibling = lastName.nextSibling;
    const previousSibling = lastName.previousSibling;
    
    // Get element siblings (skipping text nodes)
    const nextElementSibling = lastName.nextElementSibling;
    const previousElementSibling = lastName.previousElementSibling;
    
    console.log('2.v. Next sibling:', nextSibling);
    console.log('2.v. Previous sibling:', previousSibling);
    console.log('2.v. Next element sibling:', nextElementSibling);
    console.log('2.v. Previous element sibling:', previousElementSibling);
    
    const output = document.getElementById('output2_v');
    if (output) {
        output.innerHTML = `<h3>Siblings of "lastName":</h3>
                           <p>Previous Element Sibling: ${previousElementSibling?.textContent || 'None'}</p>
                           <p>Next Element Sibling: ${nextElementSibling?.textContent || 'None'}</p>`;
    }
}

// vi. Get parent node and node type of element having id "email"
function task2_vi() {
    const emailInput = document.getElementById('email');
    const parentNode = emailInput.parentNode;
    const parentNodeType = parentNode.nodeType;
    
    console.log('2.vi. Parent node:', parentNode);
    console.log('2.vi. Parent node type:', parentNodeType);
    
    const output = document.getElementById('output2_vi');
    if (output) {
        output.innerHTML = `<h3>Parent Node of "email":</h3>
                           <p>Parent Node: ${parentNode.nodeName} (id: ${parentNode.id})</p>
                           <p>Parent Node Type: ${parentNodeType} (Element Node)</p>`;
    }
}

// ==================== Run All Tasks ====================
function runAllTasks() {
    console.log('========== QUESTION 1 ==========');
    task1_i();
    task1_ii();
    task1_iii();
    task1_iv();
    task1_v();
    
    console.log('\n========== QUESTION 2 ==========');
    task2_i();
    task2_ii();
    task2_iii();
    task2_iv();
    task2_v();
    task2_vi();
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Loaded - Running all tasks...');
    runAllTasks();
});