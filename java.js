let text = "Computer Science Student";

let index = 0;

let typing = document.getElementById("typing");

function type() {

    if (index < text.length) {

    typing.innerHTML += text.charAt(index);

    index++;

    setTimeout(type, 100);

} else {

    setTimeout(remove, 1500);
    }

function remove(){

if(index > 0){

typing.innerHTML=text.substring(0,index-1);

index--;

setTimeout(remove,70);

}

else{

setTimeout(type,500);

}

}



type();
const typing = document.getElementById("typing");

const words = [
    "Computer Science Student",
    "Web Developer",
    "Programmer",
    "Creative Learner"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {
        typing.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentWord.length) {
            deleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }
    } else {
        typing.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            deleting = false;
            wordIndex++;

            if (wordIndex === words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, deleting ? 60 : 100);
}

typeEffect();
