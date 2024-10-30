const Hapi = require('@hapi/hapi');
const routes = require('./routes');
const ProductsHandler = require('./handler');
const ProductsService = require('./ProductsService');
require('dotenv').config();

const init = async () => {
  const server = Hapi.server({
    host: 'localhost',
    port: 3000,
    debug: {
      request: ['error']
    },
  });

  const productsService = new ProductsService();
  const productsHandler = new ProductsHandler(productsService);
  server.route(routes(productsHandler));

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();