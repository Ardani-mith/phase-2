## Apa itu CSS Framework?

**CSS Framework** adalah kumpulan file CSS (dan kadang JavaScript) siap pakai yang membantu mempercepat proses pembuatan antarmuka web. Framework ini menyediakan komponen-komponen siap pakai (*pre-styled*) dan sistem grid yang memudahkan pengembangan desain yang konsisten.

---

## Mengapa Menggunakan CSS Framework?

- **Kecepatan** – Mempercepat proses pengembangan antarmuka pengguna (UI).
- **Konsistensi** – Menjamin tampilan seragam di seluruh aplikasi.
- **Responsif** – Umumnya mendukung pendekatan *mobile-first*, memudahkan pembuatan desain responsif.
- **Fitur Lengkap** – Menyediakan komponen kompleks seperti modal, carousel, navigasi, dan lainnya.

---

## Contoh Framework Populer

### 1. Bootstrap

Framework paling populer dengan banyak komponen siap pakai dan dokumentasi lengkap. Mudah dipelajari bagi pemula.

**Contoh Penggunaan:**

Tambahkan CDN Bootstrap di dalam `<head>` HTML Anda:

```html
<!-- Bootstrap CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css" rel="stylesheet">

<!-- Bootstrap JS + Popper -->
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.min.js" integrity="sha384-7qAoOXltbVP82dhxHAUje59V5r2YsVfBafyUDxEdApLPmcdhBPg1DKg1ERo0BZlK" crossorigin="anonymous"></script>
```

---

### 2. Tailwind CSS

Menggunakan pendekatan *utility-first*, memberikan fleksibilitas tinggi dalam mendesain antarmuka.

**Contoh Penggunaan:**

Tambahkan CDN Tailwind sebelum tag penutup `</body>`:

```html
<script src="https://cdn.tailwindcss.com"></script>
```

Untuk proyek yang lebih kompleks, gunakan CLI Tailwind:

```bash
npm install -D tailwindcss@3
npx tailwindcss init
```

---

## Contoh Implementasi

Lihat file `{framework}.html` untuk melihat implementasi event JavaScript dalam berbagai kasus nyata menggunakan framework terkait.
