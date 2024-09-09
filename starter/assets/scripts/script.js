import {
  generateMusicItemUsingTemplate,
  generateMusicItemUsingInnerHTML,
  showLoading,
  hideLoading,
  getAllMusics,
} from './utils.js';

const drawerButton = document.querySelector('#drawer-button');
const drawerNavigation = document.querySelector('#navList');
const musicListContainer = document.getElementById('musicList');

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

function stopOtherAudio(currentAudio) {
  const listOfAudioElement = document.querySelectorAll('audio');

  listOfAudioElement.forEach((audioElement) => {
    // Others audio will be paused
    if (currentAudio !== audioElement) {
      audioElement.pause();
    }
  });
}

function setupOnlyOneAudioIsPlaying() {
  const listOfAudioElement = document.querySelectorAll('audio');

  listOfAudioElement.forEach((audioElement) => {
    /**
     * See: HTMLMediaElement: play event
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/play_event
     */
    audioElement.addEventListener('play', (event) => {
      const currentAudio = event.currentTarget;
      stopOtherAudio(currentAudio);
    });
  });
}

function populateWithTemplate(musics) {
  const elements = musics.map((music) => generateMusicItemUsingTemplate(music));
  musicListContainer.append(...elements);
}

function populateWithInnerHTML(musics) {
  const elements = musics.map((music) => generateMusicItemUsingInnerHTML(music));
  musicListContainer.innerHTML = elements.join('');
}

function usingSampleMusics() {
  showLoading();

  // Simulate loading indicator with Promise and setTimeout
  new Promise((resolve) => {
    setTimeout(() => {
      // Get all sample music
      const musicsSample = getAllMusics();

      // Render musics to page
      populateWithTemplate(musicsSample);

      hideLoading();
      resolve();
    }, 3000);
  });
}

(function () {
  setupDrawer();

  usingSampleMusics();

  // Only play single audio in a time
  setupOnlyOneAudioIsPlaying();
})();
