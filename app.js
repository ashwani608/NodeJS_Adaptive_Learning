$(document).ready(function(){

$('#login_submit_btn').click(function() {
        //debugger;
        var uname = $('#username').val();
        var pwd = $('#password').val();
        // id="username"
        console.log("login click");
        //debugger;
        $.post("http://localhost:8080/login",
        {
            name: uname,
            password: pwd
        },
        function(data, status){
            //console.log("Data: " + data + "\nStatus: " + status);
            //debugger;
            //console.log("agent client");
            if(status == 'success') {
                if(data.success) {
                    //debugger;
                    window.location.href='./views/doodle.html';
                }
                else {
                    alert('Pease enter valid username and password');
                }
            }
        });
    });

});
