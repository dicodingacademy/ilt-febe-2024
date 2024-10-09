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

export function generateMusicItemUsingInnerHTML({ id, artLink, title, signature, audioLink }) {
  return `
    <article class="music-list__item" data-musicid="${id}">
      <div class="card">
        <div class="card-image">
          <img id="musicimage" src="${artLink}" alt="${title}" />
        </div>
        <div class="card-body">
          <h3 id="musictitle" class="card-body__title">${title}</h3>
          <div id="musicsignature" class="card-body__copyright">${signature}</div>
          <audio
            id="musicaudio"
            class="music-list__item__audio"
            controls
            src="${audioLink}"
            preload="none"
          ></audio>
        </div>
      </div>
    </article>
  `;
}
