const os = require('os');
const io = require('socket.io')({
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', socket => {
  console.log('a user connected');

  socket.on('disconnect', () => console.log('a user disconnect'));

  socket.on('set username', username => {
    const data = `${username} joins the chat.`;
    console.log(data);
    io.emit('user join', data);
  });

  socket.on('chat message', msg => {
    console.log(msg);
    io.emit('chat message', msg);
  });
});

const PORT = 3000;

io.listen(PORT);

console.log(`Listening at ${os.hostname()}:${PORT}`);
