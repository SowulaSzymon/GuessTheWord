//word and Hints Object
const options = {
    niedźwiedź: "mieszka w lesie jest wielki",
    sól: "Jedna z dwóch najpopularniejszych przypraw",
    kawa: "Pijesz to z rana na pobudzenie",
    kosz: "czasem coś tam rzucisz, a segregacja to podstawa",
    kurtka: "dzięki temu nie jest ci zimno",
    lampa: "gdybyś mieszkał w jaskini, byłoby jasno",
    telefon: "codziennie tego używasz",
    dyscyplina: "wypadkowa zabawy według owcawk",
};


//Initial References
const message = document.getElementById('message');
const hintRef = document.querySelector('.hint-ref');
const controls = document.querySelector('.controls-container');
const startBtn = document.getElementById('start');
const letterContainer = document.getElementById('letter-container');
const userInpSection = document.getElementById('user-input-section');
const resultText = document.getElementById('result');
const word = document.getElementById('word');
const words = Object.keys(options);

let randomWord = "",
    randomHint = "";
let winCount = 0,
    lossCount = 0;
//generate random value
const generateRandomValue = (array) => Math.floor(Math.random() * array.length);


// block all the buttons

const blocker = () => {   
     let lettersButtons = document.querySelectorAll('.letters');
};


//Start Game 
startBtn.addEventListener('click', () => {
    controls.classList.add("hide");
    init();
})