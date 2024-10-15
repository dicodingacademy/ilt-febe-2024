import HomePage from '../src/scripts/views/pages/HomePage';
import { mockFetchMusicFailed, mockFetchMusicSuccessfully } from './mock';
import {HomePresenter} from '../src/scripts/views/presenters/HomePresenter';

describe('HomePresenter', () => {
  let view;

  beforeEach(async () => {
    // render the view
    view = new HomePage();
    document.body.innerHTML = await view.render();
  });

  it('should call correct view contract when fetch is successfully', async () => {
    // Arrange
    mockFetchMusicSuccessfully();
    const spyShowLoading = jest.spyOn(view, 'showLoading');
    const spyHideLoading = jest.spyOn(view, 'hideLoading');
    const spyPopulateMusic = jest.spyOn(view, 'populateMusics');

    const presenter = new HomePresenter(view);

    // Action
    await presenter.getMusics();

    // Assert
    expect(spyShowLoading).toHaveBeenCalledTimes(1);
    expect(spyPopulateMusic).toHaveBeenCalledTimes(1);
    expect(spyHideLoading).toHaveBeenCalledTimes(1);
  });

  it('should log to console.error when fetch is failed', async () => {
    // Arrange
    mockFetchMusicFailed();
    console.error = jest.fn();

    const presenter = new HomePresenter(view);

    // Action
    await presenter.getMusics();

    // Assert
    expect(console.error).toHaveBeenCalledTimes(1);
  })
});
