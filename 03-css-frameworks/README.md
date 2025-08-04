## Apa itu CSS Framework?

CSS Framework adalah kumpulan file CSS (dan kadang JavaScript) yang siap pakai untuk membantu Anda mendesain web interface dengan lebih cepat dan konsisten. Mereka menyediakan komponen-komponen pre-styled dan sistem grid.

## Mengapa Menggunakan CSS Framework?

- Kecepatan: Mempercepat proses pengembangan UI.
- Konsistensi: Memastikan tampilan yang seragam di seluruh aplikasi.
- Responsif: Sebagian besar framework dibangun dengan pendekatan mobile-first, mudah membuat desain responsif.
- Fitur: Menyediakan komponen kompleks seperti modal, carousel, navigasi, dll.

## Contoh Framework Populer:

1. Bootstrap: Paling populer, banyak fitur, mudah dipelajari.
2. Tailwind CSS: Pendekatan utility-first, memberikan fleksibilitas tinggi.

    Contoh Menggunakan Bootstrap (Sederhana):
    - Tambahkan Bootstrap CDN di <head> HTML Anda:
    `<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>`

    `<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.min.js" integrity="sha384-7qAoOXltbVP82dhxHAUje59V5r2YsVfBafyUDxEdApLPmcdhBPg1DKg1ERo0BZlK" crossorigin="anonymous"></script>`

    Contoh Menggunakan Tailwind (Sederhana):
    - Tambahkan Tailwind CDN di sebelum </body> penutup:
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            clifford: '#da373d',
          }
        }
      }
    }
    </script>

## Contoh Penggunaan

Lihat file `{framework}.html` untuk contoh implementasi JavaScript Events dalam kasus nyata.