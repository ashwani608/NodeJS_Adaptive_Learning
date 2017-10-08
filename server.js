
var http = require('http');

var express = require('express');
var app = express();
var path = require('path');
var qs = require('querystring');
var Sync = require('sync');

app.use(express.static(__dirname));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});


app.post('/login', function(req, res) {
    console.log(req.method);
    var jsonString = '';
    console.log("hi");
    //debugger;
    //sys.puts(sys.inspect(data));
    req.on('data', function (data) {
        jsonString += data;
    });

    

req.on('end', function () {
        var logindata = qs.parse(jsonString);
        console.log(logindata);

var mydata = '';
    /*Sync(function(){
        validateLogin.sync(logindata.name, function(err, data) {
            if(err) {
                // handle the error
                console.log("data not recieved");
                res.send({'success':false});
            } else {
                // handle your data

                console.log("data recieved");
                mydata +=data[0].password;
                console.log(data);
                //console.log(data[0].password);

                //if(data.length && logindata.password==data[0].password)
                //{
                   //     console.log("ok");
                   //     res.send({'success':true});
                //}
                //else
                //{
                     //   console.log("not ok");
                     //   res.send({'success':false});    
                //}
            }
        });

    });*/


    /* Sync(function(){
       mydata = validateLogin.sync(logindata.name);

    });

    console.log("data is "+mydata);
    if(mydata.length && logindata.password==mydata[0].password)
                {
                        console.log("ok");
                        res.send({'success':true});
                }
                else
                {
                        console.log("not ok");
                        res.send({'success':false});    
                } */

     if(logindata.name == 'user' && logindata.password == 'user') {
            console.log("validated");
            res.send({'success':true});
        }
        else {
            res.send({'success':false});
        }           

    });


    
    
});


/*function validateLogin(username, next)
{
    var mysql      = require('mysql');
    var connection = mysql.createConnection
    ({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'edukwel'
    });

    connection.connect();
    var queryStr = 'SELECT password from student_login where id='+"'"+username+"'";
    console.log(queryStr);
    //var validation = false;

    var query = connection.query(queryStr, function (err, rows, fields){
    if (err) {
            //throw err;
            //console.log(err);
            //logger.info(err);
            next(err, null);
        }
        else {
            //console.log(rows);
            next(null, rows);
        }
    });

}*/


function validateLogin(username)
{
    var mysql      = require('mysql');
    var connection = mysql.createConnection
    ({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'edukwel'
    });

    connection.connect();
    var queryStr = 'SELECT password from student_login where id='+"'"+username+"'";
    console.log(queryStr);
    //var validation = false;

    var query = connection.query(queryStr);
    return	null;
    /*{
    if (err) {
            //throw err;
            //console.log(err);
            //logger.info(err);
            return null;
        }
        else {
            //console.log(rows);
            return rows;
        }
    };*/

}




app.listen(8080);
