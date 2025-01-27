const dynamicText = document.querySelector("h1 span");
const words = ["Fun", "Love","the World","Life"];
let wordIndex = 0;
let charIndex = 0;

const typeEffect = () => {

    const currentWord = words[wordIndex];
    const currentChars = currentWord.substring(0,charIndex);

    dynamicText.textContent = currentChars;

    if(charIndex < currentWord.length){
        charIndex++;
        setTimeout(typeEffect,200);
    } else{
        charIndex = 0;
        if(wordIndex >= words.length - 1){
            wordIndex = 0;
        } else {
            wordIndex++;
        }
        setTimeout(typeEffect,500);
    }
}

typeEffect();