'use strict'

// EVENTOS BOTONES LANGUAGE E INICIO DE SESIÓN 
let language = document.getElementById("language");
let signIn = document.getElementById("signIn");

language.addEventListener("focus", () => {
    language.style.border = "3px solid white";
});

language.addEventListener("blur", () => {
    language.style.border = "0.15px solid #62605d";
});

signIn.addEventListener("mouseover", () => {
    signIn.style.filter = "brightness(80%)";
})
signIn.addEventListener("mouseout", () => {
    signIn.style.filter = "brightness(100%)";
})



// EVENTOS INPUT EMAIL Y BTN SUBMIT
let emailInput = document.getElementById("email-input");
let btnSubmit = document.getElementById("btn-submit");

emailInput.addEventListener("focus", () => {
    emailInput.style.border = "3px solid white";
});

emailInput.addEventListener("blur", () => {
    emailInput.style.border = "0.15px solid #62605d";
});

btnSubmit.addEventListener("mouseover", () => {
    btnSubmit.style.filter = "brightness(80%)";
})
btnSubmit.addEventListener("mouseout", () => {
    btnSubmit.style.filter = "brightness(100%)";
})


let currentIndex = 0;
let itemWidth = 250;
const items = document.querySelectorAll('#movieRow .col');
const totalItems = items.length;
let visibleItems = calculateVisibleItems();


function updateItemWidth() {
    if (window.innerWidth >= 1280) {
        itemWidth = 260;
    } else if (window.innerWidth >= 1024) {
        itemWidth = 250;
    } else if (window.innerWidth >= 768) {
        itemWidth = 245;
    } else {
        itemWidth = 240; 
    }
    visibleItems = calculateVisibleItems();
}


function calculateVisibleItems() {
    return Math.floor(window.innerWidth / itemWidth);
}


window.addEventListener('resize', () => {
    updateItemWidth();
    updateRowPosition(); 
});


document.getElementById('nextBtn').addEventListener('click', () => {
    if (currentIndex < totalItems - visibleItems) {
        currentIndex++;
        updateRowPosition();
    }
});

document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateRowPosition();
    }
});


function updateRowPosition() {
    const movieRow = document.getElementById('movieRow');
    movieRow.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

updateItemWidth();



    



   

   
