$(document).ready(function(){
    $('#saveUsername').click(function(event){
        event.preventDefault();
        var username = $('#username').val();
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