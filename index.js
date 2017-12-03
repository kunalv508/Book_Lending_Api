let Hapi = require('hapi');
let Vision = require('vision');
let Inert = require('inert');
let Handlebars = require('handlebars');

let server = new Hapi.Server();
server.connection({
   host: 'localhost',
   port: Number(8080)
});
 server.route(require("./route.js"))
server.start(function() {
   console.log('Server running at:', server.info.uri);
});