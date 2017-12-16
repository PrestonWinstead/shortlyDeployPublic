var app = require('./server-config.js');
require('dotenv').config();

if (process.env.NODE_ENV === 'development') {
  var port = process.env.PORT || 9000;
} else {
  var port = process.env.PORT || 80;
}

app.listen(port);

console.log(`Server now listening on port ${port}`);
