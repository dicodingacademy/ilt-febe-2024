/**
 * Konfigurasi Jest untuk pengujian aplikasi web. Penjelasan detail lebih lanjut
 * dapat dilihat di sini:
 * https://jestjs.io/docs/configuration
 */

const config = {
  testMatch: [
    '**/tests/**/*.test.js?(x)',
  ],

  // environment yang digunakan untuk testing
  testEnvironment: 'jsdom',

  // mentransformasi berkas JS dengan babel-jest
  transform: {
    '^.+\\.(js|ts)$': 'babel-jest',
  },
};

module.exports = config;