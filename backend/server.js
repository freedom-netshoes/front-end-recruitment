'use strict';

const http = require('http')
   ,  app  = require('./config/express.js')();

http.createServer(app).listen(app.get('port'), () => console.log(`Server running on port ${app.get('port')}`));
