// Exercise 5: User Input & Conditional Statement | JAVASCRIPT
// Run this script, & check whether alert message would be displayed or not. Record the outputs.

console.log("=== Exercise 5 Solutions ===");

// a. Pre-increment operator test
console.log("\n--- Test a ---");
var a = 4;
console.log("Initial value of a:", a);
if (++a == 5) {
    alert("given condition for variable a is true");
    console.log("✓ ALERT DISPLAYED: given condition for variable a is true");
    console.log("Explanation: ++a increments a to 5 BEFORE comparison, so 5 == 5 is true");
} else {
    console.log("✗ No alert displayed");
}

// b. Post-increment operator test
console.log("\n--- Test b ---");
var b = 82;
console.log("Initial value of b:", b);
if (b++ == 83) {
    alert("given condition for variable b is true");
    console.log("✓ ALERT DISPLAYED: given condition for variable b is true");
} else {
    console.log("✗ NO ALERT DISPLAYED (expected)");
    console.log("Explanation: b++ uses current value (82) for comparison, then increments to 83");
    console.log("So 82 == 83 is false, no alert shown");
}

// c. Multiple conditions test
console.log("\n--- Test c ---");
var c = 12;
console.log("Value of c:", c);
if (c == 13) {
    alert("condition 1 is true");
    console.log("✓ ALERT DISPLAYED: condition 1 is true");
} else {
    console.log("✗ No alert for condition 1 (12 == 13 is false)");
}

if (c == 13) {
    alert("condition 2 is true");
    console.log("✓ ALERT DISPLAYED: condition 2 is true");
} else {
    console.log("✗ No alert for condition 2 (12 == 13 is false)");
}

if (c < 14) {
    alert("condition 3 is true");
    console.log("✓ ALERT DISPLAYED: condition 3 is true");
    console.log("Explanation: 12 < 14 is true");
} else {
    console.log("✗ No alert for condition 3");
}

if (c == 14) {
    alert("condition 4 is true");
    console.log("✓ ALERT DISPLAYED: condition 4 is true");
} else {
    console.log("✗ No alert for condition 4 (12 == 14 is false)");
}

// d. Arithmetic operations test
console.log("\n--- Test d ---");
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
console.log("materialCost:", materialCost);
console.log("laborCost:", laborCost);
console.log("totalCost:", totalCost);
console.log("laborCost + materialCost:", laborCost + materialCost);

if (totalCost == laborCost + materialCost) {
    alert("The cost equals");
    console.log("✓ ALERT DISPLAYED: The cost equals");
    console.log("Explanation: 22000 == 2000 + 20000 (22000 == 22000) is true");
} else {
    console.log("✗ No alert displayed");
}

// e. Boolean conditions test
console.log("\n--- Test e ---");
if (true) {
    alert("True");
    console.log("✓ ALERT DISPLAYED: True");
    console.log("Explanation: true condition always executes");
} else {
    console.log("✗ No alert for true condition");
}

if (false) {
    alert("False");
    console.log("✓ ALERT DISPLAYED: False");
} else {
    console.log("✗ NO ALERT DISPLAYED for false condition (expected)");
    console.log("Explanation: false condition never executes");
}

console.log("\n=== Summary of Expected Outputs ===");
console.log("a. ✓ Alert WILL be displayed (pre-increment: ++a == 5)");
console.log("b. ✗ Alert will NOT be displayed (post-increment: b++ == 83 uses current value 82)");
console.log("c. ✓ Only 'condition 3 is true' alert will be displayed (12 < 14 is true)");
console.log("d. ✓ Alert WILL be displayed (22000 == 22000 is true)");
console.log("e. ✓ Only 'True' alert will be displayed (false condition never executes)");
