// ===== PROBLEM 1 =====
function problem1() {
  var itemsArray = [
    { name: "juice", price: "50", quantity: "3" },
    { name: "cookie", price: "30", quantity: "9" },
    { name: "shirt", price: "880", quantity: "1" },
    { name: "pen", price: "100", quantity: "2" },
  ];

  let totalAllItems = 0;
  let output = "<h3>Item Prices:</h3>";

  for (let i = 0; i < itemsArray.length; i++) {
    let itemPrice = itemsArray[i].price * itemsArray[i].quantity;
    totalAllItems += itemPrice;
    output += `<p><strong>${itemsArray[i].name}:</strong> ${itemsArray[i].quantity} x ${itemsArray[i].price} = ${itemPrice}</p>`;
  }

  output += `<h3>Total Price of All Items: ${totalAllItems}</h3>`;
  document.getElementById("output1").innerHTML = output;
}

// ===== PROBLEM 2 =====
function problem2() {
  var user = {
    name: "John",
    email: "john@example.com",
    password: "12345",
    age: 25,
    gender: "Male",
    city: "Karachi",
    country: "Pakistan",
  };

  let output = "<h3>Object Properties Check:</h3>";

  // Check age property
  if ("age" in user) {
    output += `<p>✓ Age property exists: ${user.age}</p>`;
  } else {
    output += `<p>✗ Age property does not exist</p>`;
  }

  // Check country property
  if ("country" in user) {
    output += `<p>✓ Country property exists: ${user.country}</p>`;
  } else {
    output += `<p>✗ Country property does not exist</p>`;
  }

  // Check firstName property
  if ("firstName" in user) {
    output += `<p>✓ FirstName property exists: ${user.firstName}</p>`;
  } else {
    output += `<p>✗ FirstName property does not exist</p>`;
  }

  // Check lastName property
  if ("lastName" in user) {
    output += `<p>✓ LastName property exists: ${user.lastName}</p>`;
  } else {
    output += `<p>✗ LastName property does not exist</p>`;
  }

  document.getElementById("output2").innerHTML = output;
}

// ===== PROBLEM 3 =====
// Constructor Function
function Person(name, email, password, age, gender, city, country) {
  this.name = name;
  this.email = email;
  this.password = password;
  this.age = age;
  this.gender = gender;
  this.city = city;
  this.country = country;
}

function problem3() {
  // Creating multiple records using constructor
  var person1 = new Person(
    "Ahmed",
    "ahmed@gmail.com",
    "pass123",
    28,
    "Male",
    "Karachi",
    "Pakistan"
  );
  var person2 = new Person(
    "Fatima",
    "fatima@gmail.com",
    "pass456",
    25,
    "Female",
    "Lahore",
    "Pakistan"
  );
  var person3 = new Person(
    "Ali",
    "ali@gmail.com",
    "pass789",
    30,
    "Male",
    "Islamabad",
    "Pakistan"
  );

  let output = "<h3>Multiple Records Created:</h3>";

  output += `<p><strong>Person 1:</strong></p>
                      <p>Name: ${person1.name}</p>
                      <p>Email: ${person1.email}</p>
                      <p>Age: ${person1.age}</p>
                      <p>Gender: ${person1.gender}</p>
                      <p>City: ${person1.city}</p>
                      <p>Country: ${person1.country}</p>`;

  output += `<p><strong>Person 2:</strong></p>
                      <p>Name: ${person2.name}</p>
                      <p>Email: ${person2.email}</p>
                      <p>Age: ${person2.age}</p>
                      <p>Gender: ${person2.gender}</p>
                      <p>City: ${person2.city}</p>
                      <p>Country: ${person2.country}</p>`;

  output += `<p><strong>Person 3:</strong></p>
                      <p>Name: ${person3.name}</p>
                      <p>Email: ${person3.email}</p>
                      <p>Age: ${person3.age}</p>
                      <p>Gender: ${person3.gender}</p>
                      <p>City: ${person3.city}</p>
                      <p>Country: ${person3.country}</p>`;

  document.getElementById("output3").innerHTML = output;
}

// ===== PROBLEM 4 =====
var areaPopulation = [];

function AreaPerson(name, gender, address, education, profession) {
  this.name = name;
  this.gender = gender;
  this.address = address;
  this.education = education;
  this.profession = profession;
}

function addPerson() {
  var name = document.getElementById("name").value;
  var gender = document.querySelector('input[name="gender"]:checked');
  var address = document.getElementById("address").value;
  var education = document.getElementById("education").value;
  var profession = document.getElementById("profession").value;

  if (!name || !gender || !address || !education || !profession) {
    alert("Please fill all fields!");
    return;
  }

  var person = new AreaPerson(
    name,
    gender.value,
    address,
    education,
    profession
  );
  areaPopulation.push(person);

  // Clear inputs
  document.getElementById("name").value = "";
  document
    .querySelectorAll('input[name="gender"]')
    .forEach((r) => (r.checked = false));
  document.getElementById("address").value = "";
  document.getElementById("education").value = "";
  document.getElementById("profession").value = "";

  displayRecords();
}

function displayRecords() {
  let output = `<h3>Total Records: ${areaPopulation.length}</h3>`;

  for (let i = 0; i < areaPopulation.length; i++) {
    output += `<div style="border: 1px solid black; padding: 10px; margin: 10px 0;">
                    <p><strong>Record ${i + 1}:</strong></p>
                    <p>Name: ${areaPopulation[i].name}</p>
                    <p>Gender: ${areaPopulation[i].gender}</p>
                    <p>Address: ${areaPopulation[i].address}</p>
                    <p>Education: ${areaPopulation[i].education}</p>
                    <p>Profession: ${areaPopulation[i].profession}</p>
                </div>`;
  }

  document.getElementById("output4").innerHTML = output;
}
