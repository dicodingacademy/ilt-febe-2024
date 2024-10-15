export async function registerSW() {
  // Do register service worker here
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
