// Obtener username
var username = localStorage.getItem('username');
if (!username || username.trim() === "") {
username = "Usuario";
    }

let index_pregunta = 0
let puntaje = 0

cargarPregunta(index_pregunta)



// Busca la pregunta, la imagen y las opciones en la base de datos
function cargarPregunta(index) {
    objetoPregunta = baseDePreguntas[index]
    opciones = [...objetoPregunta.incorrectas]
    opciones.push(objetoPregunta.respuesta)

    opciones.sort(() => Math.random() - 0.5)

    document.getElementById("pregunta").innerHTML = objetoPregunta.pregunta
    document.getElementById("imagen").src = objetoPregunta.imagen

    document.getElementById("btn1").innerHTML = opciones[0];
    document.getElementById("btn2").innerHTML = opciones[1];
    document.getElementById("btn3").innerHTML = opciones[2];
    document.getElementById("btn4").innerHTML = opciones[3];
}   

// Alerta de opcion correcta e incorrecta, suma de puntajes y cambia de preguntas
async function seleccionarOpcion(index)   {
    let validezRespuesta = opciones[index] == objetoPregunta.respuesta
    if (validezRespuesta) {
      await  Swal.fire({
            title: "Respuesta correcta",
            text: `${objetoPregunta.informacion}`,
            icon: "success",
            confirmButtonColor: "#FFAF02",

        });
        puntaje++;
        // Suma al ranking de juegos ganados
        var gamesWon = localStorage.getItem(username + '_gamesWon') || 0;
        gamesWon++;
        localStorage.setItem(username + '_gamesWon', gamesWon);
    } else {
       await Swal.fire({
            title: "Respuesta incorrecta",
            text: `La respuesta correcta es "${objetoPregunta.respuesta}"`,
            icon: "error",
            confirmButtonColor: "#FFAF02",

        })
    }
    index_pregunta++;

    // Finaliza el juego
    if (index_pregunta >= baseDePreguntas.length) {
        
        await  Swal.fire({
            title: "Juego terminado",
            text: `Tu puntaje fue de ${puntaje}/${baseDePreguntas.length}`,
            confirmButtonColor: "#FFAF02",
            
        });
        index_pregunta = 0;
        puntaje = 0
    }
    cargarPregunta(index_pregunta);
}

