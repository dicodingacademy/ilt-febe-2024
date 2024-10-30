// Source code for demo web server with Hapi

const Hapi = require('@hapi/hapi');

(async () => {
  // create HTTP server
  const server = Hapi.server({ host: 'localhost', port: 3000 });

  // Routing response based on url & HTTP verb/method using Hapi
  server.route([
    {
      method: 'GET',
      path: '/',
      handler: () => ({ message: 'You are doing GET' }),
    },
    {
      method: 'POST',
      path: '/',
      handler: () => ({ message: 'You are doing POST' }),
    },
  ]);


  // run the HTTP server
  await server.start();
  console.log('server start at ', server.info.uri);
})();

