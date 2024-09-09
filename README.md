# ILT Berkomunikasi dengan RESTful API

## Pengantar

Studi kasus ini ditujukan untuk ILT dengan materi Asynchronous JavaScript Request. Ini adalah studi kasus lanjutan dari ILT DOM manipulation dengan event (interactivity).

Hands-on kali ini berfokus pada penyediaan productive musics dari API (Server).

## Petunjuk

Branch repository ini mengandung dua direktori yang bersifat starter dan solution project. Sebagai pembuka sesi hands-on demo, instruktur dipersilakan untuk memanfaatkan project dalam direktori `starter`.

## Hasil Akhir Proyek

Hasil akhir dari kegiatan hands-on demo akan terlihat seperti berikut.

![Calm Headphones](calm-headphones-final.png?raw=true)

![Network DevTools in Calm Headphones](calm-headphones-network-devtools.png?raw=true)

## Menampilkan Data dari Musics API

Untuk menyediakan music secara online, kita memerlukan API yang menyediakan data tersebut. Kami telah menyediakan API untuk hands-on ini bernama Calm Music API. Instruktur bisa menggunakan dokumentasi berikut.

> [https://calm-music-api.dicoding.dev](https://calm-music-api.dicoding.dev/#/)

## Checklist Live Demo

Instruktur dapat memanfaatkan checklist live demo berikut agar sesi hands-on lebih terstruktur.

- [ ] Menyiapkan starter project yang telah disediakan.
- [ ] Menjalankan proyek dengan local server. Bisa menggunakan [http-server](https://www.npmjs.com/package/http-server) atau [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) bagi pengguna VS Code.
- [ ] Melakukan bedah kode secara cepat dan memahami praktik simulasi indikator loading.
- [ ] Menyusun kebutuhan Music API untuk membuat HTTP request pada `scripts/api.js`.
- [ ] Membuat HTTP request untuk Music API.
  - [ ] Memanfaatkan chaining method `then()`.
  - [ ] Memanfaatkan fitur `async/await`.
- [ ] Mengatur agar dua atau lebih audio tidak dimainkan secara serentak (memanfaatkan event `play`).
