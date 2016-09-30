'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({ port: 3000 });

server.route({
    method: 'GET',
    path: '/user/{id}',
    handler: function (request, reply) {
        switch (request.params.id) {
            case '1':
                var user = {
                    id: '1',
                    name: 'Klaus'
                };
                reply(user);
                break;
            case '2':
                var user = {
                    id: '2',
                    name: 'Asa'
                };
                reply(user);
                break;
            case '3':
                var user = {
                    id: '3',
                    name: 'Franz'
                };
                reply(user);
                break;
            case '4':
                var user = {
                    id: '4',
                    name: 'Marcin'
                };
                reply(user);
                break;
            default:
                var error = {
                    code: '404',
                    message: 'User not found'
                };
                reply(error).code(404);
        }
    }
});

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});
