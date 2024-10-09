import HomePage from '../views/pages/HomePage.js';
import NotFoundPage from '../views/pages/NotFoundPage.js';

const routes = {
  '/': new HomePage(),
  '/404': new NotFoundPage(),
};

export default routes;
