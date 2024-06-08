$(document).ready(function(){
    var username = "Usuario";
    $('#saveUsername').click(function(event){
        event.preventDefault();
        username = $('#username').val();
        if(username.trim() === "") {
            username = "Usuario";
            localStorage.setItem('username', username);
        } else {
            localStorage.setItem('username', username);
            event.preventDefault();
            $('#myModal').modal('show');
        }
    });
    // Supongamos que esta función se llama cuando la página se carga
    // Supongamos que esta función se llama cuando la página se carga
    // Supongamos que esta función se llama cuando la página se carga
    function onLoad() {
        var table = document.getElementById('rankingTable');
        var rankings = [];

        // Recoge todos los datos del ranking en un array
        for (var i = 0; i < localStorage.length; i++) {
            var key = localStorage.key(i);
            if (key.endsWith('_gamesWon')) {
                var username = key.slice(0, -9); // Remueve '_gamesWon' del final
                var gamesWon = parseInt(localStorage.getItem(key));
                rankings.push({username: username, gamesWon: gamesWon});
            }
        }

        // Ordena el array de rankings de mayor a menor
        rankings.sort(function(a, b) {
            return b.gamesWon - a.gamesWon;
        });

        // Modifica las primeras 5 filas de la tabla
        for (var i = 0; i < Math.min(5, rankings.length); i++) {
            var row = table.rows[i+1]; // +1 para saltar la fila del encabezado
            row.cells[0].innerHTML = "#" + (i + 1); // Agrega el número de ranking
            row.cells[1].innerHTML = rankings[i].username;
            row.cells[2].innerHTML = rankings[i].gamesWon;
        }
    }

    window.onload = function() {
        onLoad();
      }
});