const net = require('net');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> '
});


const client = net.createConnection(4367, '192.168.1.155', () => {
  console.log('i am connected');
  // client.write('hello i am a client'); \\ first way
  
  rl.prompt();
  rl.on('line', line => {
    // console.log(line);
    client.write(line);
    rl.prompt();
  });
});

client.on('data', data => {
  console.log(data.toString());
  rl.prompt();
});
