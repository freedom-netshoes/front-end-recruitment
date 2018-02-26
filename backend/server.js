'use strict';

const http = require('http')
   ,  app  = require('./config/express.js')();

http.createServer(app).listen(app.get('port'), () => console.log(`
  *** Teste Tiago Juvenal de Lima ***
  *** Rodando na porta ${app.get('port')} ***`
  ));
