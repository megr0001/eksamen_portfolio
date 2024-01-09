window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises"); 
    document.querySelector("#polaroid").addEventListener("click", tema1);
}

function tema1() {
    console.log("sidenTema2Vises")
}

// klik på det første Polaroid element og bliv redirected til siden tema2
const clickableElement = document.getElementById('polaroid_element');
// Tilføj en click event listener til elementet
clickableElement.addEventListener('click', function(mousedown) {
  // Redirected side her:
  window.location.href = 'tema2.html';
});

// redirect side tema3
const polaroid1 = document.getElementById('polaroid_element1');
polaroid1.addEventListener('click', function(mousedown) {
  window.location.href = 'tema3.html';
});

// redirect side tema4
const polaroid_element2 = document.getElementById('polaroid_element2');
polaroid_element2.addEventListener('click', function(mousedown) {
  window.location.href = 'tema4.html';
});

// redirect side tema5
const polaroid_element3 = document.getElementById('polaroid_element3');
polaroid_element3.addEventListener('click', function(mousedown) {
  window.location.href = 'tema5.html';
});

// redirect side mig
const flyvemaskine = document.getElementById('flyvemaskine');
flyvemaskine.addEventListener('click', function(mousedown) {
  window.location.href = 'mig.html';
});


// HEADER - BURGER MENU DROP DOWN
const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const menu = document.querySelector(".menu");
const links = document.querySelectorAll(".menu li a");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    burger.classList.remove("active");
    nav.classList.remove("active");
  });
});