const io = require('socket.io');

io.on('connection', (socket) => {
    socket.on('messages', data => {
        console.log('Receiving data...');
        socket.emit('messages', data);
    });
});

const port = 8000;
io.listen(port);
console.log('listening on port ', port);