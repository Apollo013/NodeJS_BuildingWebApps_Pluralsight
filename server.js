var express = require('express');
var app = express();

function authUser(request, response, next){
    var user = {
        id : 1, 
        name: 'Paul',
        admin: false
    };

    request.user = user;
    next();
}

app.use(authUser);

app.get('/', function(request, response){
    response.send({foo: 'bar'});
});

app.post('/dostuff', function(request, response){
    var param = request.query.foo;
    response.send(
        {
            foo: 'param is ' + param,
            isAdmin: request.user.admin
        }        
    );
});

app.listen(3000);