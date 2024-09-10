import { ENDPOINTS, getAllMusics } from './api.js';
import {
  generateMusicItemUsingTemplate,
  generateMusicItemUsingInnerHTML,
  showLoading,
  hideLoading,
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

function usingChainingPromise() {
  showLoading();

  // Get from API
  return getAllMusics()
    .then(populateWithTemplate) // render musics with template
    .catch((error) => {
      console.error('Something went error:', error);
    })
    .finally(hideLoading);
}

/**
 * Hindari penulisan kode seperti ini.
 * Beberapa hal buruk ketika menerapkan kode seperti ini:
 * 1. Fungsi memiliki lebih dari satu tanggung jawab, mendapatkan data dari network dan me-render data ke DOM.
 * 2. Fungsi akan sulit diuji secara otomatis.
 * 3. Sulit untuk dibaca. Tidak berebda dengan callback-hell karena berpontensi menjorok ke dalam.
 * 
 * Solusi:
 * Buat fungsi untuk mendapatkan musics dari API secara terpisah.
 * 
 */
function usingChainingPromiseInWrongWay() {
  showLoading();

  // Get from API
  return fetch(ENDPOINTS.list).then((response) => {
    response
      .json()
      .then((response) => {
        const data = response.data;

        // Render musics to page
        populateWithTemplate(data.musics);
      })
      .catch((error) => {
        console.error('Something went error:', error);
      })
      .finally(() => {
        // Hide loading indicator
        hideLoading();
      });
  });
}

/**
 * Memanfaatkan fitur async/await untuk menciptakan kode berasa synchronous
 */
async function usingAsyncAwait() {
  showLoading();

  try {
    // Get from API
    const musics = await getAllMusics();

    // Render musics to page
    populateWithTemplate(musics);
  } catch (error) {
    console.error('Something went error:', error);
  } finally {
    // Hide loading indicator
    hideLoading();
  }
}

(function () {
  setupDrawer();

  // Fetching tanpa async/await
  usingChainingPromise().then(setupOnlyOneAudioIsPlaying);

  // Fetching dengan async/await
  // await usingAsyncAwait();
  // setupOnlyOneAudioIsPlaying();
})();
