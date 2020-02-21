var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    socket.on('login', function(data){
        console.log('Client logged-in:\nname:' + data.name);
        socket.name = data.name;
        io.emit('login', data.name);
    });

    socket.on('chat', function(data){
        console.log('Message %s', data.msg);
        var msg = {
            from: {
                name: socket.name,
            },
            msg: data.msg
        };

        socket.broadcast.emit('chat', msg);
    });

    socket.on('forceDisconnect', function(){
        socket.disconnect();
    });

    socket.on('diconnect', function(){
        console.log('user disconnected: ' + socket.name);
    });
});

server.listen(3000, function(){
    console.log('Server listening on port 3000');
})
