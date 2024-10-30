const routes = (handler) => [
  /**
 * @TODO 1
 * Define rout for POST method
 */
  {
    method: 'GET',
    path: '/products',
    handler: handler.getAllProductsHandler,
  },
  {
    method: 'GET',
    path: '/products/{id}',
    handler: handler.getOneProductHandler,
  }
];

module.exports = routes;