const drawerButton = document.querySelector('#drawer-button');
const drawerNavigation = document.querySelector('#navList');

function setupDrawer() {
  drawerButton.addEventListener('click', () => {
    drawerNavigation.classList.toggle('open');
  });

  document.body.addEventListener('click', (event) => {
    if (!drawerNavigation.contains(event.target) && !drawerButton.contains(event.target)) {
      drawerNavigation.classList.remove('open');
    }
  });
}

function setupOnlyOneAudioIsPlaying() {
  // Function ini dimanfaatkan untuk mengaktifkan satu audio saja.
}

function init() {
  setupDrawer();

  // Lakukan get musics dan render ke DOM di sini

  setupOnlyOneAudioIsPlaying();
}

init();
