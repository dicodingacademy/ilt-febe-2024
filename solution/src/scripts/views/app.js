import { parseAndCombineActiveUrl } from '../routes/url-parser.js';
import routes from '../routes/routes.js';

class App {
  constructor({ drawerNavigation, drawerButton, content }) {
    this._content = content;
    this._drawerButton = drawerButton;
    this._drawerNavigation = drawerNavigation;

    this.setupDrawer();
  }

  setupDrawer() {
    this._drawerButton.addEventListener('click', () => {
      this._drawerNavigation.classList.toggle('open');
    });

    document.body.addEventListener('click', (event) => {
      if (!this._drawerNavigation.contains(event.target) && !this._drawerButton.contains(event.target)) {
        this._drawerNavigation.classList.remove('open');
      }
    });
  }

  async renderPage() {
    const url = parseAndCombineActiveUrl();
    let page = routes[url] ?? null;

    if (!page) {
      window.location.hash = '/404';
      page = routes['/404'];
    }

    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
