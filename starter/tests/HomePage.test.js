import HomePage from '../src/scripts/views/pages/HomePage';
import {mockFetchMusicSuccessfully} from "./mock";

describe('HomePage', () => {
  let view;

  beforeEach(async () => {
    // render the homepage
    view = new HomePage();
    document.body.innerHTML = await view.render();
  });

  it('should render the homepage correctly', () => {
    const heroHeading = document.querySelector('.hero__content > h2');
    const heroDescription = document.querySelector('.hero__content > p');
    const sectionTitle = document.querySelector('section > h2');

    expect(heroHeading.innerHTML).toEqual('Be Focus and Productive');
    expect(heroDescription.innerHTML).toEqual('Not just an ordinary headphones. It\'s designed for meditation.');
    expect(sectionTitle.innerHTML).toEqual('Choose Your Productive Music Favorite');
  });

  it('should render the list of musics correctly when call afterRender', async () => {
    // Arrange
    mockFetchMusicSuccessfully();

    // Action
    await view.afterRender();

    // Assertion
    const musicList = document.querySelectorAll('.music-list__item');
    expect(musicList.length).toEqual(3);
  })
});
