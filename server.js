const io = require('socket.io')();

io.on('connection', (socket) => {
    console.log("made socket connection");

    socket.on('messages', (data) => {
        console.log('Receiving data...');
        socket.broadcast.emit('messages', data);
    });
});

const port = 8000;
io.listen(port);
console.log('listening on port ', port);