const net = require('net');

const client = net.createConnection(4367, '192.168.1.155', () => {
  console.log('i am connected');
  client.write('hello i am a client');
});
