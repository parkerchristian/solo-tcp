const fs = require('fs');

const rs = fs.createReadStream('./1_streams.md', {
  encoding: 'utf8'
});

rs.on('lab', data => {
  console.log(data);
});
