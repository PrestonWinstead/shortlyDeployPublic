var app = require('./server-config.js');
require('dotenv').config();

var port = process.env.PORT || 9000;

app.listen(port);

console.log(`Server now listening on port ${port}`);
