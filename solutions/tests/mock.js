const mockFetchMusicResponse = {
  "status": "success",
  "data": {
    "musics": [
      {
        "id": "01-coverless-book",
        "title": "Coverless Book",
        "author": "Amir Firouzfard",
        "signature": "Music by <a href=\"https://pixabay.com/users/ambientaudiovision-25188255/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=186307\">Amir Firouzfard</a> from <a href=\"https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=186307\">Pixabay</a>",
        "audioLink": "https://calm-music-api.dicoding.dev/assets/musics/01-coverless-book.mp3",
        "artLink": "https://calm-music-api.dicoding.dev/assets/arts/01-coverless-book.jpg"
      },
      {
        "id": "02-lofi-orchestra",
        "title": "Lofi Orchestra",
        "author": "Patrick A",
        "signature": "Music by <a href=\"https://pixabay.com/users/xethrocc-12734491/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=162306\">Patrick A.</a> from <a href=\"https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=162306\">Pixabay</a>",
        "audioLink": "https://calm-music-api.dicoding.dev/assets/musics/02-lofi-orchestra.mp3",
        "artLink": "https://calm-music-api.dicoding.dev/assets/arts/02-lofi-orchestra.jpg"
      },
      {
        "id": "03-for-a-dream",
        "title": "For a Dream",
        "author": "Patrick A",
        "signature": "Music by <a href=\"https://pixabay.com/users/xethrocc-12734491/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=216038\">Patrick A.</a> from <a href=\"https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=216038\">Pixabay</a>",
        "audioLink": "https://calm-music-api.dicoding.dev/assets/musics/03-for-a-dream.mp3",
        "artLink": "https://calm-music-api.dicoding.dev/assets/arts/03-for-a-dream.jpg"
      }
    ]
  }
}

// we need to mock fetch response because jsdom not implement fetch


function mockFetchMusicSuccessfully() {
  global.fetch = jest.fn().mockImplementation(() => {
    return Promise.resolve({
      json: () => Promise.resolve(mockFetchMusicResponse),
    });
  });
}

function mockFetchMusicFailed() {
  global.fetch = jest.fn().mockImplementation(() => {
    return Promise.reject(new Error('Failed to fetch'));
  });
}

export { mockFetchMusicSuccessfully, mockFetchMusicFailed };