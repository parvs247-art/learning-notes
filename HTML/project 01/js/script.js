// Search bar focus animation

const search = document.querySelector("input");

search.addEventListener("focus", () => {
    search.style.boxShadow = "0 0 15px rgba(226,55,68,0.7)";
});

search.addEventListener("blur", () => {
    search.style.boxShadow = "none";
});


// Header scroll animation

window.addEventListener("scroll", function(){
    const header = document.querySelector("header");

    if(window.scrollY > 50){
        header.style.background = "#c81d2c";
        header.style.transition = "0.3s";
    }
    else{
        header.style.background = "#e23744";
    }
});


// Typing placeholder animation

const text = [
    "Search for restaurant...",
    "Search for pizza...",
    "Search for biryani...",
    "Search for cafes..."
];

let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function type(){

    current = text[i];

    if(!isDeleting){
        search.placeholder = current.substring(0,j++);
    }
    else{
        search.placeholder = current.substring(0,j--);
    }

    if(j == current.length){
        isDeleting = true;
        setTimeout(type,1000);
        return;
    }

    if(j == 0){
        isDeleting = false;
        i++;
        if(i == text.length){
            i = 0;
        }
    }

    setTimeout(type,100);
}

type();