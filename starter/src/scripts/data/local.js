const musicsSample = [
  {
    id: 1,
    title: 'Coverless Book',
    author: 'Amir Firouzfard',
    signature:
      'Music by <a href="https://pixabay.com/users/ambientaudiovision-25188255/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=186307">Amir Firouzfard</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=186307">Pixabay</a>',
    audioLink: 'https://calm-music-api.dicoding.dev/assets/musics/01-coverless-book.mp3',
    artLink: 'https://calm-music-api.dicoding.dev/assets/arts/01-coverless-book.jpg',
  },
  {
    id: 2,
    title: 'Lofi Orchestra',
    author: 'Patrick A',
    signature:
      'Music by <a href="https://pixabay.com/users/xethrocc-12734491/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=162306">Patrick A.</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=162306">Pixabay</a>',
    audioLink: 'https://calm-music-api.dicoding.dev/assets/musics/02-lofi-orchestra.mp3',
    artLink: 'https://calm-music-api.dicoding.dev/assets/arts/02-lofi-orchestra.jpg',
  },
  {
    id: 3,
    title: 'For a Dream',
    author: 'Patrick A',
    signature:
      'Music by <a href="https://pixabay.com/users/xethrocc-12734491/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=216038">Patrick A.</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=216038">Pixabay</a>',
    audioLink: 'https://calm-music-api.dicoding.dev/assets/musics/03-for-a-dream.mp3',
    artLink: 'https://calm-music-api.dicoding.dev/assets/arts/03-for-a-dream.jpg',
  },
  {
    id: 4,
    title: 'Good Night',
    author: 'FASSound',
    signature:
      'Music by <a href="https://pixabay.com/users/fassounds-3433550/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=160166">FASSounds</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=160166">Pixabay</a>',
    audioLink: 'https://calm-music-api.dicoding.dev/assets/musics/04-goodnight.mp3',
    artLink: 'https://calm-music-api.dicoding.dev/assets/arts/04-goodnight.jpg',
  },
  {
    id: 5,
    title: 'Summer Rain',
    author: 'Patrick A',
    signature:
      'Music by <a href="https://pixabay.com/users/xethrocc-12734491/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=216038">Patrick A.</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=216038">Pixabay</a>',
    audioLink: 'https://calm-music-api.dicoding.dev/assets/musics/05-summer-rain.mp3',
    artLink: 'https://calm-music-api.dicoding.dev/assets/arts/05-summer-rain.jpg',
  },
  {
    id: 6,
    title: 'Lofi Study',
    author: 'FASSound',
    signature:
      'Music by <a href="https://pixabay.com/users/fassounds-3433550/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=112191">FASSounds</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=112191">Pixabay</a>',
    audioLink: 'https://calm-music-api.dicoding.dev/assets/musics/06-lofi-study.mp3',
    artLink: 'https://calm-music-api.dicoding.dev/assets/arts/06-lofi-study.jpg',
  },
];

export function getAllMusics() {
  return [...musicsSample];
}
