$(document).ready(function(){
    $('#saveUsername').click(function(){
        var username = $('#username').val();
        localStorage.setItem('username', username);
        alert('Nombre de usuario guardado');
        // Redireccionar a la siguiente página
        window.location.href = 'pagina2.html';
    });
});