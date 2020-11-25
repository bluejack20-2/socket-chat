const io = require('socket.io')({
  cors: {
    origin: 'http://localhost:8080',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', socket => {
  console.log('a user connected');

  socket.on('disconnect', () => console.log('a user disconnect'));

  socket.on('chat message', msg => {
    console.log('Mesage: ' + msg);
    io.emit('chat message', msg);
  });
})

io.listen(3000, () => console.log('listening...'));
