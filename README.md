# ILT Membuat Websitemu Lebih Interaktif

## Pengantar

Studi kasus ini ditujukan untuk ILT dengan materi DOM Manipulation dan Event. Ini adalah studi kasus lanjutan dari ILT belajar membangun kerangka halaman web dengan HTML dan CSS.

Hands-on kali ini berfokus pada DOM manipulation dan interaktif elemen HTML.

## Petunjuk

Branch repository ini mengandung dua direktori yang bersifat starter dan solution project. Sebagai pembuka sesi hands-on demo, instruktur dipersilakan untuk memanfaatkan project dalam direktori `starter`.

## Hasil Akhir Proyek

Hasil akhir dari kegiatan hands-on demo akan terlihat seperti berikut.

![Calm Headphone](calm-headphones-final.png?raw=true)

## Konten Calm Music

Karena akan menampilkan calm playlist, kita perlu menentukan struktur konten HTML. Berikut adalah contoh HTML yang bisa instruktur jadikan acuan.

```html
<article class="music-list__item" data-musicid="{{AUDIO ID}}">
  <div class="card">
    <div class="card-image">
      <img id="musicImage" src="{{ART AUDIO IMAGE LINK}}" alt="{{AUDIO TITLE}}" />
    </div>
    <div class="card-body">
      <h3 id="musicTitle" class="card-body__title">{{AUDIO TITLE}}</h3>
      <div id="musicSignature" class="card-body__copyright">{{AUDIO SIGNATURE}}</div>
      <audio
        id="musicAudio"
        class="music-list__item__audio"
        controls
        src="{{AUDIO LINK}}"
        type="audio/mp3"
        preload="none"
      ></audio>
    </div>
  </div>
</article>
```

Kode styling telah kami sediakan untuk memudahkan instruktur melakukan hands-on demo. Ini dengan catatan bahwa instruktur mengikuti struktur konten di atas.

## Checklist Live Demo

Instruktur dapat memanfaatkan checklist live demo berikut agar sesi hands-on lebih terstruktur.

- [ ] Menyiapkan starter project yang telah disediakan.
- [ ] Menjalankan proyek dengan calm playlist temporary (tersedia langsung di HTML).
- [ ] Merapikan dan mempercantik tampilan dengan CSS (jika dibutuhkan)
- [ ] Menampilkan calm playlist yang telah disediakan pada `scripts/utils.js`.
  - [ ] Tampilkan menggunakan `<template>`
  - [ ] Tampilkan menggunakan string (`innerHTML`).
- [ ] Mengatur agar dua atau lebih audio tidak dimainkan secara serentak (memanfaatkan event `play`).
