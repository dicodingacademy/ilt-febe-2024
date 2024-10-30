# ILT Pengembangan di Sisi Server dengan JavaScript

## Pengantar
Project ini digunakan untuk demonstrasi selama kegiatan ILT Pengembangan di Sisi Server dengan JavaScript.
Mengangkat studi kasus RESTful API sederhana aplikasi pengelola data produk.

Dalam mengimplementasikan demo ini, kami sudah menyiapkan beberapa hal seperti.

1. Package dependencies yang dibutuhkan untuk melakukan demo.
2. Konfigurasi yang dibutuhkan untuk melakukan demo RESTful API sederhana.
3. Script npm `start` untuk menjalankan project, `migrate` untuk menjalankan migration, dan `lint` untuk menjalankan linter eslint.
5. Berkas yang perlu dilengkapi oleh instruktur (diberi tanda @TODO).
6. Solusi akhir dari implementasi automation pada folder `/solutions`.


### Prerequisite tools

- Visual Studio Code
- Node.js Latest LTS
- Database PostgreSQL local atau di Supabase
- Google Chrome (atau chromium browser lainnya).


## Petunjuk

Agar instruktur dapat melakukan demo dengan lancar. Harap untuk melakukan hal-hal berikut terlebih dahulu.
1. Clone repository ini.
2. Checkout ke branch 06-backend-javascript.
3. Buka directory `starter` dengan menggunakan Visual Studio Code.
4. Pada terminal, jalankan `npm install`.
6. Lengkapi berkas yang ditandai dengan komentar @TODO.

## Hasil Akhir Proyek

### Endpoint Menambahkan Data Produk

- Method: POST

- URL: /products 

- Body request:
```
{
    "name": "Running Shoes",
    "description": "Sepatu Lari",
    "category": "Sepatu",
    "price": "500000",
    "brand": "Lokal"
}
```

- Body response:
```
{
    "status": "success",
    "message": "Product berhasil ditambahkan",
    "data": {
        "productId": "FjSpHZ-KKL6Id1Ja"
    }
}
```

## Checklist Live Demo

Instruktur dapat memanfaatkan checklist live demo berikut agar sesi hands-on lebih terstruktur.

- [ ] Menambahkan route baru di `src/routes.js`.
- [ ] Menambahkan satu handler di `src/handler.js`
- [ ] Menambahkan satu function untuk menyimpan data produk di `src/ProductService.js`