# ILT Selangkah Lebih Maju dengan PWA

## Pengantar

Studi kasus ini ditujukan untuk sesi mengajar ILT dengan materi progressive web apps atau sering disingkat PWA. Ini adalah lanjutan dari ILT sebelumnya (AJAX) sehingga ia menggunakan topik yang sama. Kami namakan Calm Headphones.

Kondisi aplikasi ini sudah fully responsive terhadap berbagai ukuran layar perangkat dan melakukan teknik AJAX untuk mendapatkan data dari server. Selanjutnya, kita akan membuat aplikasi tersebut memiliki sifat offline capability dan installable layaknya platform-specific app atau aplikasi native.

## Petunjuk

Branch repository ini mengandung dua direktori yang bersifat starter dan solution project. Sebagai permulaan sesi praktik, instruktur dipersilakan untuk memanfaatkan project dalam direktori `starter`.

Dalam membangun PWA, ada tiga komponen penting, yaitu application shell, offline capability, dan installable. Untuk application shell, instruktur diperkenankan untuk mereviu saja karena sudah aplikasi sudah memilikinya (navigation bar).

### Prerequisite tools

- Visual Studio Code
- Google Chrome (atau chromium browser lainnya).
- Perangkat mobile (opsional jika ingin mendemokan di mobile platform).

## Hasil Akhir Proyek

Hasil akhir dari kegiatan hands-on demo akan terlihat seperti berikut.

![Offline Capability for Calm Headphones](/pwa-offline-devtools.png?raw=true)

![Calm Headphones on desktop platform](/pwa-desktop.png?raw=true)

![Calm Headphones on mobile platform](/pwa-mobile.jpeg?raw=true)

## Checklist Live Demo

Instruktur dapat memanfaatkan checklist live demo berikut agar sesi hands-on lebih terstruktur.

- [ ] Menyiapkan dan membuka starter project yang telah disediakan.
- [ ] Melakukan reviu dan menjalankan proyek. Bisa menggunakan [simple web server](https://simplewebserver.org/), [package http-server](https://www.npmjs.com/package/http-server), [live server VSCode extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) bagi pengguna VS Code.
- [ ] Membuat berkas javascript service worker dan memasangnya dalam konteks web.
  - [ ] Mempraktikkan update service worker.
- [ ] Membangun offline capability dengan strategi cache first, network first, dan stale-while revalidate dari nol.
- [ ] Memberikan kemampuan offline menggunakan Workbox. Bisa menggunakan [workbox CDN](https://developer.chrome.com/docs/workbox/modules/workbox-sw#using_workbox_sw_via_cdn) atau package manager.
- [ ] Membuat manifest file untuk installable PWA.
