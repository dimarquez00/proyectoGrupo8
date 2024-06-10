const replaceAt = (string, character,index) =>{
    return string.substring(0,index) + character + string.substring(index + character.length)
}
const updateAhorcadoImage = (mistakes) => {
    let imageElement = document.getElementById('imagenAhorcado');
    imageElement.src = `./img/ahorcado/${mistakes}.jpg`;
}

const items = [
    { image: "./img/señales/bicicleta.png", word: "prohibicion de circulacion" },
    { image: "./img/señales/contramano.jpg", word: "contramano" },
    { image: "./img/señales/escolares.jpg", word: "escolares" },
    { image: "./img/señales/noAvanzar.jpg", word: "no avanzar" },
    { image: "./img/señales/noEstacionar.jpg", word: "prohibido estacionar" },
    { image: "./img/señales/noRuidosMolestos.jpg", word: "no ruidos molestos" },
    { image: "./img/señales/pare.jpg", word: "pare" },

];

const selectedItem = items[Math.floor(Math.random() * items.length)];
const secretWord = selectedItem.word;
let hiddenWord = secretWord.replace(/[^\s]/g, "_ ");
console.log(secretWord)
console.log(hiddenWord)
document.querySelector('.hiddenWord').innerHTML = hiddenWord.replace("  ", " &nbsp;");
console.log(hiddenWord)
errorCounter = 0;
const maxErrors = 7;

document.getElementById('imageToGuess').src = selectedItem.image;
console.log(document.querySelector('.hiddenWord').innerHTML)


const evaluateWord = () =>{
    let error = true
    const letter = document.querySelector('.letterInput').value;
    
    for(let i=0; i<secretWord.length; i++){
        if(secretWord[i] === letter){
            hiddenWord = replaceAt(hiddenWord, letter, i * 2)
            error = false;
        }
    }
    document.querySelector('.hiddenWord').innerHTML = hiddenWord;
    console.log(document.querySelector('.hiddenWord').innerHTML)

    if(error){
        console.log("error")
        errorCounter++;
        updateAhorcadoImage(errorCounter);
    }

    if(!hiddenWord.includes("_")){
        document.getElementById('evaluateButton').disabled = true;
        alert("Has ganado")
    }
    else if (errorCounter >= maxErrors) {
        updateAhorcadoImage(errorCounter);
        setTimeout(() => {
            alert(`Has perdido. La palabra era: ${secretWord}`);
            document.getElementById('evaluateButton').disabled = true;
        }, 100)
    }
}

document.getElementById('evaluateButton').addEventListener('click', evaluateWord)