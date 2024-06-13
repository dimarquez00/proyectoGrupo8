const replaceAt = (string, character, index) => {
  return (
    string.substring(0, index) +
    character +
    string.substring(index + character.length)
  );
};
const updateAhorcadoImage = (mistakes) => {
  let imageElement = document.getElementById("imagenAhorcado");
  imageElement.src = `./img/ahorcado/${mistakes}.jpg`;
};

const items = [
   { image: "./img/señales/bicicleta.png", word: "no circular", meaning: "Esta señal significa que no está permitido que las bicicletas circulen por esa área" },
  { image: "./img/señales/contramano.jpg", word: "contramano", meaning: "Esta señal indica que la vía ante la cual se encuentra tiene sentido de circulación opuesto y por lo tanto no se puede ingresar."},
   { image: "./img/señales/escolares.jpg", word: "escolares", meaning: "Esta señal nos indica que hay una escuela cerca y que debemos estar atentos porque puede haber muchos niños caminando por allí" },
   { image: "./img/señales/noAvanzar.jpg", word: "no avanzar", meaning:" Esta señal nos dice que debemos detenernos y no seguir adelante" },
  {image: "./img/señales/PARE.jpg", word: "pare", meaning: "Esta señal nos indica que debemos detenernos por completo."},
  {
    image: "./img/señales/noAdelantar.jpg",
    word: "no adelantar",
    meaning: "Esta señal nos indica que no debemos adelantar al auto ue esta adelante.",
  },
];

var myModal = document.getElementById("myModal");
var modalBody = myModal.querySelector(".modal-body");
var exampleModalLabel = document.getElementById("exampleModalLabel");
var username = localStorage.getItem("username") || "Usuario";
document.getElementById("letterInput").addEventListener("keypress", function(event) {
    if (event.key >= '0' && event.key <= '9') {
      event.preventDefault();
    }
  });


const selectedItem = items[Math.floor(Math.random() * items.length)];
const secretWord = selectedItem.word;
const meaning = selectedItem.meaning;
let hiddenWord = secretWord.replace(/[^\s]/g, "_ ").replaceAll("  ", "   ");

document.querySelector(".hiddenWord").innerHTML = hiddenWord.replaceAll(
  "  ",
  " &nbsp;"
);
errorCounter = 0;
const maxErrors = 7;

document.getElementById("imageToGuess").src = selectedItem.image;
console.log(document.querySelector(".hiddenWord").innerHTML);

const evaluateWord = () => {
  let error = true;
  const letter = document.querySelector(".letterInput").value.toLowerCase();
  if(!/^[a-zA-Z]$/.test(letter)) {
    document.querySelector(".letterInput").value = ''
    return
  }

  for (let i = 0; i < secretWord.length; i++) {
    if (secretWord[i] === letter) {
      hiddenWord = replaceAt(hiddenWord, letter, i * 2);
      error = false;
    }
  }
  document.querySelector(".hiddenWord").innerHTML = hiddenWord.replaceAll(
    "  ",
    " &nbsp;"
  );
  console.log(document.querySelector(".hiddenWord").innerHTML);

  if (error) {
    console.log("error");
    errorCounter++;
    updateAhorcadoImage(errorCounter);
  }

  // Verifica si la palabra oculta ha sido completada
  if (!hiddenWord.includes("_")) {
    evaluateButton.disabled = true;
    exampleModalLabel.textContent = "¡Ganaste!";
    modalBody.innerHTML = "";

    // Obtener username
    var username = localStorage.getItem('username');
    if (!username || username.trim() === "") {
    username = "Usuario";
        }

// Suma al ranking de juegos ganados
var gamesWon = localStorage.getItem(username + '_gamesWon') || 0;
gamesWon++;
localStorage.setItem(username + '_gamesWon', gamesWon);


    const congratulationsMessage = document.createElement("p");
    congratulationsMessage.textContent = "¡Felicitaciones, " + username + "!";

    const wordMessage = document.createElement("p");
    wordMessage.innerHTML =
    "La palabra era: " + secretWord + ".<br>" + meaning;

    modalBody.appendChild(congratulationsMessage);
    modalBody.appendChild(wordMessage);

    var bootstrapModal = new bootstrap.Modal(myModal);
    bootstrapModal.show();

  } else if (errorCounter >= maxErrors) {
    updateAhorcadoImage(errorCounter);
    setTimeout(() => {
      exampleModalLabel.textContent = "Perdiste!";

      modalBody.innerHTML = "";

      const congratulationsMessage = document.createElement("p");
      congratulationsMessage.textContent = "¡Oh no, " + username + "! Has perdido. ¡Inténtalo de nuevo!";

      const wordMessage = document.createElement("p");
      wordMessage.innerHTML =
        "La palabra era: " + secretWord + ".<br>" + meaning;

      modalBody.appendChild(congratulationsMessage);
      modalBody.appendChild(wordMessage);

      var bootstrapModal = new bootstrap.Modal(myModal);
      bootstrapModal.show();
      document.getElementById("evaluateButton").disabled = true;
    }, 100);
  }

  document.querySelector(".letterInput").value = "";
};

document
  .getElementById("evaluateButton")
  .addEventListener("click", evaluateWord);
