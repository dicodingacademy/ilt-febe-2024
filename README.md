# ILT Menguji Aplikasi Web

## Pengantar
Project ini digunakan untuk demonstrasi selama kegiatan ILT Menguji Aplikasi Web.
Mengangkat studi kasus yang sama dengan ILT sebelumnya yaitu, Calm Headphones.

Dalam mengimplementasikan testing, kami sudah menyediakan beberapa hal.

1. Package dependencies yang dibutuhkan untuk melakukan pengujian.
2. Konfigurasi yang dibutuhkan untuk melakukan pengujian.
3. npm runner `test` untuk pengujian `jest` dan `e2e` untuk pengujian `codeceptjs`.
4. Berkas `tests/mock.js` yang digunakan untuk mocking fetch selama pengujian menggunakan Jest.
5. Berkas pengujian yang perlu dilengkapi oleh instruktur (diberi tanda @TODO).
6. Solusi akhir dari implementasi automation pada folder `/solutions`.


### Prerequisite tools

- Visual Studio Code
- Node.js Latest LTS
- Google Chrome (atau chromium browser lainnya).


## Petunjuk

Agar instruktur dapat melakukan demo dengan lancar. Harap untuk melakukan hal-hal berikut terlebih dahulu.
1. Clone repository ini.
2. Checkout ke branch 05-automation-testing.
3. Buka directory `starter` dengan menggunakan Visual Studio Code.
4. Pada terminal, jalankan `npm install`.
5. Setup playwright dengan perinah `npx playwright install`.
6. Lengkapi berkas testing yang ada (ditandai dengan komentar @TODO).

## Hasil Akhir Proyek

### Homepage dan HomePresenter Test dengan menggunakan Jest

Berikut hasil akhir dari pengujian Homepage dan HomePresenter dengan menggunakan Jest
```shell
npm test

> ilt4-pwa@1.0.0 test
> jest

 PASS  tests/HomePresenter.test.js
 PASS  tests/HomePage.test.js

Test Suites: 2 passed, 2 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        1.479 s, estimated 2 s
Ran all test suites.
```

Berikut hasil akhir dari pengujian end-to-end test dengan menggunakan CodeceptJS
```shell
npm run e2e

> ilt4-pwa@1.0.0 e2e
> codeceptjs run --steps

CodeceptJS v3.6.7 #StandWithUkraine
Using test root "/home/dimas/JavaScriptProject/ilt-febe-2024/solutions"

Homepage --
  showing homepage with all musics list
    I am on page "/"
    I see "Be Focus and Productive"
    I see "Not just an ordinary headphones. It's designed for meditation."
    I see "Choose Your Productive Music Favorite"
    I wait for element ".music-list__item", 5
    I see "Coverless Book"
    I see "Lofi Orchestra"
    I see "For a Dream"
    I see "Good Night"
  ✔ OK in 1767ms

Not Found Page --
  showing not found page when visit unknown page
    I am on page "/#/it-should-not-found"
    I see "Page Not Found (404)"
  ✔ OK in 436ms


  OK  | 2 passed   // 3s
```

## Checklist Live Demo

Instruktur dapat memanfaatkan checklist live demo berikut agar sesi hands-on lebih terstruktur.

- [ ] Menulis pengujian `tests/HomePage.test.js`.
- [ ] Menulis pengujian `tests/HomePresenter.test.js`
- [ ] Menulis pengujian end-to-end `e2e/Homepage.test.js`
- [ ] Menulis pengujian end-to-end `e2e/NotFoundPage.test.js`