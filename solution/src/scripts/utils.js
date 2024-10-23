export async function registerSW() {
  if (!('serviceWorker' in navigator)) {
    console.warn('Service worker not supported');
    return;
  }

  try {
    // Caching strategies from scratch
    const registration = await navigator.serviceWorker.register('/sw.js');

    // Caching strategies with workbox
    // const registration = await navigator.serviceWorker.register('/sw-workbox.js');

    registration.onupdatefound = () => {
      // Jika event handler ini dijalankan, itu artinya ada
      // pembaruan service worker yang sedang dipasang.
      const installingWorker = registration.installing;
      console.log('A new service worker is being installed:', installingWorker);
    };
  } catch (error) {
    console.log('Failed to register service worker', error);
  }
}

export function generateMusicItemTemplate({ id, artLink, title, signature, audioLink }) {
  return `
    <article class="music-item" data-musicid="${id}">
      <img id="musicimage" class="music-item__image" src="${artLink}" alt="${title}" />
      <div class="music-item__body">
        <h3 id="musictitle" class="music-item__title">${title}</h3>
        <div id="musicsignature" class="music-item__signature">${signature}</div>
        <audio
          id="musicaudio"
          class="music-item__audio"
          src="${audioLink}"
          preload="none"
          controls
        ></audio>
      </div>
    </article>
  `;
}
