const io = require('socket.io')({
  cors: {
    origin: 'http://localhost:8080',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', socket => {
  console.log('a user connected');

  socket.on('disconnect', () => console.log('a user disconnect'));

  socket.on('set username', username => {
    const data = `${username} joins the chat.`;
    console.log(data)
    io.emit('user join', data)
  })

  socket.on('chat message', msg => {
    console.log(msg);
    io.emit('chat message', msg);
  });

})

io.listen(3000, () => console.log('listening...'));
