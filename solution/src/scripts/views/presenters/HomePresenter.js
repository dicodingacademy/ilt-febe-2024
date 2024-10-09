import { getAllMusics } from '../../data/api.js';

class HomePresenter {
  constructor(view) {
    this._view = view;
  }

  async getMusics() {
    this._view.showLoading();
    try {
      const musicResponse = await getAllMusics();

      this._view.populateMusics(musicResponse.musics);
    } catch (error) {
      console.error('Something went error:', error);
    } finally {
      this._view.hideLoading();
    }
  }
}

export { HomePresenter };
