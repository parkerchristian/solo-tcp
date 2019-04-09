const fs = require('fs');

const ws = fs.createWriteStream('./spot.json', {
  flags: 'a'
});

ws.write('{');
ws.write('\n\t"name": "spot",');
ws.write('\n\t"age": 15,');
ws.write('\n\t"weight": "15 lbs"');
ws.write('\n}');

ws.end();
