// Exercise 6: Grade Calculation Program
// Write a program to take input the marks obtained in three subjects & total marks.
// Compute & show the resulting percentage on your page. Take percentage & compute grade.

console.log("=== Exercise 6: Grade Calculation Program ===");

// String comparison example from the image
if("car" < "cat") {
    alert("car is smaller than cat");
    console.log("✓ String comparison: car is smaller than cat");
}

// Grade calculation program
function calculateGrade() {
    console.log("Starting grade calculation...");
    
    // Take input for three subjects
    var subject1 = parseFloat(prompt("Enter marks obtained in Subject 1:"));
    var subject2 = parseFloat(prompt("Enter marks obtained in Subject 2:"));
    var subject3 = parseFloat(prompt("Enter marks obtained in Subject 3:"));
    var totalMarks = parseFloat(prompt("Enter total marks:"));
    
    // Validate inputs
    if (isNaN(subject1) || isNaN(subject2) || isNaN(subject3) || isNaN(totalMarks)) {
        alert("Please enter valid numbers!");
        return;
    }
    
    if (subject1 < 0 || subject2 < 0 || subject3 < 0 || totalMarks <= 0) {
        alert("Please enter positive numbers!");
        return;
    }
    
    // Calculate marks obtained and percentage
    var marksObtained = subject1 + subject2 + subject3;
    var percentage = (marksObtained / totalMarks) * 100;
    
    // Determine grade and remarks based on percentage
    var grade, remarks;
    
    if (percentage >= 80) {
        grade = "A-one";
        remarks = "Excellent";
    } else if (percentage >= 70) {
        grade = "A";
        remarks = "Good";
    } else if (percentage >= 60) {
        grade = "B";
        remarks = "You need to improve";
    } else {
        grade = "Fail";
        remarks = "Sorry";
    }
    
    // Display the marks sheet
    var marksSheet = `
        <div style="border: 2px solid #333; padding: 20px; margin: 20px; background-color: #f9f9f9; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
            <h2 style="text-align: center; color: #333; margin-bottom: 20px;">📊 Marks Sheet</h2>
            <div style="background-color: white; padding: 15px; border-radius: 5px;">
                <p style="margin: 8px 0;"><strong>Total marks:</strong> ${totalMarks}</p>
                <p style="margin: 8px 0;"><strong>Marks obtained:</strong> ${marksObtained}</p>
                <p style="margin: 8px 0;"><strong>Percentage:</strong> ${percentage.toFixed(1)}%</p>
                <p style="margin: 8px 0;"><strong>Grade:</strong> ${grade}</p>
                <p style="margin: 8px 0;"><strong>Remarks:</strong> ${remarks}</p>
            </div>
        </div>
    `;
    
    document.writeln(marksSheet);
    
    // Also log to console
    console.log("=== Marks Sheet ===");
    console.log("Total marks:", totalMarks);
    console.log("Marks obtained:", marksObtained);
    console.log("Percentage:", percentage.toFixed(1) + "%");
    console.log("Grade:", grade);
    console.log("Remarks:", remarks);
    
    // Show grade criteria table
    console.log("\n=== Grade Criteria ===");
    console.log("Percentage >= 80%: A-one (Excellent)");
    console.log("Percentage >= 70%: A (Good)");
    console.log("Percentage >= 60%: B (You need to improve)");
    console.log("Percentage < 60%: Fail (Sorry)");
}

// Call the grade calculation function
calculateGrade();
