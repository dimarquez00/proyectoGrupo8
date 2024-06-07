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
});