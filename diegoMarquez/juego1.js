$(document).ready(function() {
    // Obtener username
    var username = localStorage.getItem('username');
    if (!username || username.trim() === "") {
        username = "Usuario";
    }
    if (username) {
        $('#welcomeMessage').text('Bienvenido/a ' + username );
    } else {
        $('#welcomeMessage').text('Bienvenido Usuario');
    }

    // Orden aleatorio de cartas
    $(document).ready(function() {
    var parent = $("#game-memory");
    var divs = parent.children();
    while (divs.length) {
        parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    }
    });

    // Juego de memoria
    var firstCard = null;
    var secondCard = null;
    var lockBoard = false;
    var signal = null;

    $('.card').click(function() {
        if (lockBoard) return;
        if ($(this).hasClass('flipped')) return;
        
        // Da vuelta la carta selecciona y muestra la señal
        $(this).html('<img src="./img/' + $(this).data('signal') + '.png">');
        $(this).addClass('flipped');

        if (!firstCard) {
            firstCard = $(this);
        } else {
            secondCard = $(this);
            lockBoard = true;
            
            // Si las cartas son iguales entra al if
            if (firstCard.data('signal') === secondCard.data('signal')) {
                $('#memory-result').text('¡Correcto! Has encontrado una pareja.');
                $('#memory-result').css('color', 'green');
                // Descripción de las señales
                if (firstCard.data('signal') === 'señal1'){
                    $('#señalDescripcion').html('<p><b>Escolares y niños:</b> Se colocan cercanas a colegios y parques para tener precaución con la velocidad en el trayecto pues circulan infantes.</p>');
                    $('#señalDescripcion').css('color', 'black');
                } else if (firstCard.data('signal') === 'señal2') {
                    $('#señalDescripcion').html('<p><b>Cruce de peatones:</b> Son áreas dispuestas para que los peatones puedan circular, generalmente se ubican en donde existen semáforos y los conductores deben respetar este espacio.</p>');
                    $('#señalDescripcion').css('color', 'black');
                } else if (firstCard.data('signal') === 'señal3') {
                    $('#señalDescripcion').html('<p><b>Pare:</b> Indica que los conductores deben detener completamente su vehículo y ceder el paso antes de continuar.</p>');
                    $('#señalDescripcion').css('color', 'black');
                } else if (firstCard.data('signal') === 'señal4') {
                    $('#señalDescripcion').html('<p><b>Prohibición de circular (Peatones):</b> Indica que los peatones no pueden transitar por esa zona específica, generalmente se encuentra en áreas peligrosas o reservadas exclusivamente para vehículos.</p>');
                    $('#señalDescripcion').css('color', 'black');
                }
                resetCards(true);

            } else {
                $('#memory-result').text('Incorrecto. Inténtalo de nuevo.');
                $('#memory-result').css('color', 'red');
                setTimeout(resetCards, 1000, false);
            }
        }
        // Mensaje de felicitaciónes
        if ($('.card.flipped').length === $('.card').length) {
            $('#exampleModalLabel').text('Felicitaciones ' + username + '!');
            $('#myModal').modal('show');
            // Contador de juegos ganados
            var gamesWon = localStorage.getItem(username + '_gamesWon') || 0;
            gamesWon++;
            localStorage.setItem(username + '_gamesWon', gamesWon);
        }
    });

    function resetCards(isMatch) {
        // Si las cartas no son iguales, se resetean
        if (!isMatch) {
            firstCard.text('❓').removeClass('flipped');
            secondCard.text('❓').removeClass('flipped');
        }
        // Resetea valores de las cartas
        firstCard = null;
        secondCard = null;
        lockBoard = false;
    }
});
