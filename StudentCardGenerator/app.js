const fileInput = document.querySelector(".studentImage");
const fileNameDisplay = document.getElementById("fileName");

fileInput.addEventListener("change", function () {
  if (this.files[0]) {
    fileNameDisplay.textContent = `✓ ${this.files[0].name}`;
  }
});

function handleFormSubmit() {
  const fullNameInput = document.querySelector(".fullName");
  const emailInput = document.querySelector(".email");
  const courseInput = document.querySelector(".studentCourseName");
  const imageInput = document.querySelector(".studentImage");
  const batchInput = document.querySelector(".studentBatch");
  const rollInput = document.querySelector(".rollNumber");

  const formData = {
    fullName: fullNameInput.value.trim(),
    email: emailInput.value.trim(),
    course: courseInput.value.trim(),
    rollNumber: rollInput.value.trim(),
    batch: batchInput.value.trim(),
    profileImage: "",
  };

  if (!imageInput.files[0]) {
    Swal.fire({
      icon: "error",
      title: "Missing Photo",
      text: "Please upload a profile photo!",
      confirmButtonColor: "#008b8b",
    });
    return;
  }

  if (
    !formData.fullName ||
    !formData.email ||
    !formData.course ||
    !formData.rollNumber ||
    !formData.batch
  ) {
    Swal.fire({
      icon: "error",
      title: "Incomplete Form",
      text: "Please fill in all required fields!",
      confirmButtonColor: "#008b8b",
    });
    return;
  }

  formData.profileImage = URL.createObjectURL(imageInput.files[0]);
  renderIdCard(formData);
}

function renderIdCard(formData) {
  const cardHtml = `
    <div class="id-card">
      <div class="id-header">STUDENT ID CARD</div>
      
      <div class="profile-section">
        <div class="profile-image-wrapper">
          <img src="${formData.profileImage}" alt="Profile Photo">
        </div>
      </div>

      <div class="info-section">
        <div class="info-item">
          <span class="info-label">Full Name</span>
          <span class="info-value">${formData.fullName}</span>
        </div>
        <div class="divider"></div>

        <div class="info-item">
          <span class="info-label">Email</span>
          <span class="info-value">${formData.email}</span>
        </div>
        <div class="divider"></div>

        <div class="info-item">
          <span class="info-label">Course</span>
          <span class="info-value">${formData.course}</span>
        </div>
        <div class="divider"></div>

        <div class="info-item">
          <span class="info-label">Roll Number</span>
          <span class="info-value">${formData.rollNumber}</span>
        </div>
        <div class="divider"></div>

        <div class="info-item">
          <span class="info-label">Batch</span>
          <span class="info-value">${formData.batch}</span>
        </div>
      </div>

      <div class="id-footer">© Student Management System 2025</div>
    </div>
  `;

  const cardContainer = document.getElementById("cardContainer");
  cardContainer.innerHTML = cardHtml;
  cardContainer.style.display = "block";
}