import App from './views/app.js';

const drawerNavigation = document.querySelector('#navlist');
const drawerButton = document.querySelector('#drawerbutton');
const content = document.querySelector('#maincontent');

const app = new App({
  content,
  drawerButton,
  drawerNavigation,
});

document.addEventListener('DOMContentLoaded', async () => {
  await app.renderPage();
});

window.addEventListener('hashchange', async () => {
  await app.renderPage();
});
