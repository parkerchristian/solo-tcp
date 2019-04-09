const net = require('net');

const server = net.createServer(socket => {
  console.log('client connected');
  
  socket.pipe(socket);

});

server.listen(4367);
