export async function registerSW() {
  // Do register service worker here
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
