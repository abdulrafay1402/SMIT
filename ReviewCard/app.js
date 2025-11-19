var reviews = [
  {
    img: "https://static.vecteezy.com/system/resources/thumbnails/032/176/191/small/business-avatar-profile-black-icon-man-of-user-symbol-in-trendy-flat-style-isolated-on-male-profile-people-diverse-face-for-social-network-or-web-vector.jpg",
    name: "Ahmed",
    skill: "Frontend Developer",
    description:
      "Specializes in responsive UI design and modern JavaScript frameworks.",
  },
  {
    img: "https://static.vecteezy.com/system/resources/thumbnails/032/176/191/small/business-avatar-profile-black-icon-man-of-user-symbol-in-trendy-flat-style-isolated-on-male-profile-people-diverse-face-for-social-network-or-web-vector.jpg",
    name: "Ali",
    skill: "Backend Engineer",
    description:
      "Experienced in building APIs, optimizing DB queries, and secure backend logic.",
  },
  {
    img: "https://static.vecteezy.com/system/resources/thumbnails/032/176/191/small/business-avatar-profile-black-icon-man-of-user-symbol-in-trendy-flat-style-isolated-on-male-profile-people-diverse-face-for-social-network-or-web-vector.jpg",
    name: "Ahad Khan",
    skill: "Machine Learning Engineer",
    description:
      "Works with neural networks, data pipelines, and predictive modeling.",
  },
  {
    img: "https://static.vecteezy.com/system/resources/thumbnails/032/176/191/small/business-avatar-profile-black-icon-man-of-user-symbol-in-trendy-flat-style-isolated-on-male-profile-people-diverse-face-for-social-network-or-web-vector.jpg",
    name: "Bilal Ahmed",
    skill: "Cybersecurity Analyst",
    description:
      "Focuses on threat detection, pentesting, and security automation.",
  },
];

var index = 0;

var username = document.querySelector("#name");
var img = document.querySelector("#img");
var skill = document.querySelector("#skill");
var description = document.querySelector("#description");

function display() {
  img.src = reviews[index].img;
  username.innerHTML = reviews[index].name;
  skill.innerHTML = reviews[index].skill;
  description.innerHTML = reviews[index].description;
}

display();

function next() {
  index = (index + 1) % reviews.length;
  display();
}

function prev() {
  index = (index - 1 + reviews.length) % reviews.length;
  display();
}
