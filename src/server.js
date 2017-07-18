import Hapi from 'hapi';
import Path from 'path';
import Inert from 'inert';
import products from './products'

const server = new Hapi.Server({
	connections: {
			routes: {
				files: {
					relativeTo: Path.join(__dirname, '../public')
				}
			}
    }
});

server.connection({
	host: 'localhost',
	port: 3000
});


server.register([Inert], (err) => {
	if (err) {
		throw err;
	}

  server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: '.',
        redirectToSlash: true,
        index: true
      }
    }
  });

	server.route({
    method: 'GET',
    path: '/products',
    handler: function (request, reply) {
      return reply(products());
    }
	});
});

server.start((err) => {
    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});
