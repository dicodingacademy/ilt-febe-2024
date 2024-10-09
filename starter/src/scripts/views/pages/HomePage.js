import { HomePresenter } from '../presenters/HomePresenter.js';
import { generateMusicItemUsingInnerHTML } from '../../utils.js';

class HomePage {
  async render() {
    return `
      <section class="hero">
        <article class="hero__content">
          <h2>Be Focus and Productive</h2>
          <p>Not just an ordinary headphones. It's designed for meditation.</p>
          <button>Learn more</button>
        </article>
  
        <article class="hero__image">
          <img src="src/images/calm-hero.png" alt="A man wearing calm headphones" />
        </article>
      </section>
  
      <section>
        <h2 class="section-title">Choose Your Productive Music Favorite</h2>
  
        <div id="musiclist" class="music-list"></div>
        <div id="loader" class="text-center">
          <span class="loader"></span>
        </div>
      </section>
    `;
  }

  async afterRender() {
    const presenter = new HomePresenter(this);

    await presenter.getMusics();

    // Only play single audio in a time
    this._setupOnlyOneAudioIsPlaying();
  }

  populateMusics(musics) {
    const elements = musics.map((music) => {
      return generateMusicItemUsingInnerHTML(music);
    });

    const musicListContainer = document.getElementById('musiclist');
    musicListContainer.innerHTML = elements.join('');
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

  showLoading() {
    const musicsLoader = document.getElementById('loader');
    musicsLoader.style.display = 'block';
  }

  hideLoading() {
    const musicsLoader = document.getElementById('loader');
    musicsLoader.style.display = 'none';
  }
}

export default HomePage;
