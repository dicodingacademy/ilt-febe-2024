# ILT Menguji Aplikasi Web

## Pengantar

_TODO_

## Petunjuk

_TODO_

### Prerequisite tools

- Visual Studio Code
- Google Chrome (atau chromium browser lainnya).
- Perangkat mobile (opsional jika ingin mendemokan di mobile platform).

## Hasil Akhir Proyek

_TODO_

## Checklist Live Demo

Instruktur dapat memanfaatkan checklist live demo berikut agar sesi hands-on lebih terstruktur.

**Unit and Integration Test**
- [ ] install package `jest`, `@types/jest`, `babel-jest`, `jest-environment-jsdom` di devDependencies.
  - `jest`: package core jest
  - `@types/jest`: membantu IDE mengenali jest global
  - `babel-jest`: transform ESM ke CommonJS karena jest "hanya" support CJS.
  - `jest-environment-jsdom`: inject DOM ke environment testing
- Buat folder `test` di root project
- 