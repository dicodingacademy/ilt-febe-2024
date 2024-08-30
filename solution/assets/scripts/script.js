import {
  getAllMusics,
  generateMusicItemUsingTemplate,
  generateMusicItemUsingInnerHTML,
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
  const elements = musics.reduce((accumulator, currentValue) => {
    return [...accumulator, generateMusicItemUsingTemplate(currentValue)];
  }, []);
  musicListContainer.append(...elements);
}

function populateWithInnerHTML(musics) {
  const elements = musics.reduce((accumulator, currentValue) => {
    return [...accumulator, generateMusicItemUsingInnerHTML(currentValue)];
  }, []);
  musicListContainer.innerHTML = elements.join('');
}

function init() {
  setupDrawer();

  const musicsSample = getAllMusics();

  // Render using <template>
  populateWithTemplate(musicsSample);

  // Render using innerHTML. Uncomment next code if you prefer
  // populateWithInnerHTML(musicsSample);

  setupOnlyOneAudioIsPlaying();
}

init();
