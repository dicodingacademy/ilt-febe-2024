import { HomePresenter } from '../presenters/HomePresenter.js';
import { generateMusicItemTemplate } from '../../utils.js';

export default class HomePage {
  async render() {
    return `
      <section class="hero-container">
        <article class="hero__content">
          <h2 class="section-title">Be Focus and Productive</h2>
          <p>Not just an ordinary headphones. It's designed for meditation.</p>
          <button>Learn more</button>
        </article>
  
        <article class="hero__image">
          <img src="src/images/calm-hero.png" alt="A man wearing calm headphones" />
        </article>
      </section>
  
      <section class="musics-container">
        <h2 class="section-title">Choose Your Productive Music Favorite</h2>

        <div id="musics" class="musics"></div>
        <div id="loader" class="loader"></div>
      </section>
    `;
  }

  async afterRender() {
    const presenter = new HomePresenter(this);

    await presenter.getMusics();
  }

  populateMusics(musics) {
    if (musics.length <= 0) {
      document.getElementById('musics').innerHTML = 'Music kosong';
      return;
    }

    const html = musics
      .map((music) => generateMusicItemTemplate(music))
      .join('');

    document.getElementById('musics').innerHTML = `
      <div id="musiclist" class="musics-list">
        ${html}
      </div>
    `;

    // Only play single audio in a time
    this._setupOnlyOneAudioIsPlaying();
  }

  _setupOnlyOneAudioIsPlaying() {
    const listOfAudioElement = document.querySelectorAll('audio');

    listOfAudioElement.forEach((audioElement) => {
      /**
       * See: HTMLMediaElement: play event
       * https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/play_event
       */
      audioElement.addEventListener('play', (event) => {
        const currentAudio = event.currentTarget;

        listOfAudioElement.forEach((otherAudioElement) => {
          // Others audio will be paused
          if (currentAudio !== otherAudioElement) {
            otherAudioElement.pause();
          }
        });
      });
    });
  }

  showLoading(selector) {
    const loader = document.querySelector(selector);
    loader.style.display = 'block';
  }

  hideLoading(selector) {
    const loader = document.querySelector(selector);
    loader.style.display = 'none';
  }
}
