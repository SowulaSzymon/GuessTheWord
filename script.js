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

     stopGame();
};


//Start Game 
startBtn.addEventListener('click', () => {
    controls.classList.add("hide");
    init();
});


//Stop game

const stopGame = () => {
    controls.classList.remove("hide");
}

//Generate Word Fn

const generateWord = () => { 
    letterContainer.classList.remove("hide");
    userInpSection.innerText = "";
    randomWord = words[generateRandomValue(words)];
    randomHint = options[randomWord];
    hintRef.innerHTML = `<div id="wordHint">
    <span>Podpowiedź: </span>${randomHint}</div>`;
    let displayItem = "";
    randomWord.split("").forEach(value=> { 
        displayItem += `<span class="inputSpace"> _ </span>`;
    });

    //Display each element as span

    userInpSection.innerHTML = displayItem;
    userInpSection.innerHTML += `<div id='chanceCount'>Pozostało Prób: ${lossCount}</div>`;
};


//initial function 
const init = () => { 
    winCount = 0;
    lossCount = 3;
    randomWord = "";
    word.innerText = "";
    randomHint = "";
    message.innerText = "";
    letterContainer.classList.add("hide");
    letterContainer.innerHTML = "";
    generateWord();

    //for creating letter buttons

    for(let i = 65; i < 91; i++){ 
        let button = document.createElement("button");
        button.classList.add('letters');

        //Number to ASCII[A-Z]
        button.innerText = String.fromCharCode(i);

        //Character button onclick
        button.addEventListener('click', () => {
            message.innerText = `Poprawna litera`;
            message.style.color = "#008000";
            let charArray = randomWord.toUpperCase().split("");
            let inputSpace = document.getElementsByClassName('inputSpace');


            //If array contains clicked value replace the matched dash with the letter

            if(charArray.includes(button.innerText)){
                charArray.forEach((char,index) => {
                    // If character in array is same as clicked button
                    if(char === button.innerText){ 
                        button.classList.add("correct");
                        //Replace dash
                        inputSpace[index].innerText = char;
                        //increment counter
                        winCount += 1;
                        //if winCount equals word length

                        if(winCount == charArray.length){
                            resultText.innerHTML ="Wygrałeś!!";
                            startBtn.innerText = "Resetuj";
                            //block all buttons
                            blocker();
                        }
                    }
                });
            }
            else { 
                //lose count 

                button.classList.add("incorrect");
                lossCount -= 1;
                document.getElementById("chanceCount").innerText= `Pozostałe próby: ${lossCount}`;
                message.innerText =`Niepoprawna litera`;
                message.style.color = "#ff0000";
                if(lossCount == 0) { 
                    word.innerHTML = `Szukane słowo to: <span> ${randomWord} </span>`;
                    resultText.innerHTML = "Porażka";
                    blocker();
                }
                
            }

            //Disable clicked buttons

            button.disabled = true;
        });


        //append generated buttons to the letters container
        letterContainer.appendChild(button);
    }
};



window.onload = () => { 
    init();
};

