const net = require('net');

// every client is a socket
const server = net.createServer(socket => {
  console.log('client connected');
  
  socket.on('data', data => {
    console.log(data.toString());
  });
  
});

// can be 1050 to about 60000 for listen
server.listen(4367);
