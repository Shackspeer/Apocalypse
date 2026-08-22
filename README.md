# Apocalypse

![Apocalypse Logo](./watermarked_img_8328755012108639381.jpg)

> Apocalypse is a web application wrapper.

## Proje Hakkında
Apocalypse, web tabanlı müzik dinleme platformunuzu doğrudan işletim sistemine entegre eden, Electron tabanlı hızlı ve hafif bir masaüstü istemcisidir. Uygulama, arka planda Chromium motorunu kullanarak hedef web adresini bağımsız bir pencereye sarar ve kullanıcıya standart bir web tarayıcısından bağımsız, pürüzsüz bir masaüstü deneyimi sunar.

## Temel Özellikler
*   **İzole Masaüstü Deneyimi:** Tarayıcı sekmeleri arasında kaybolmadan, doğrudan amaca hizmet eden bağımsız arayüz.
*   **Sistem Tepsisi (Tray) Desteği:** Uygulama kapatıldığında görev çubuğuna (sağ alt köşe) gizlenerek arka planda müzik çalmaya devam eder.
*   **Tek Instance Kilidi:** Uygulamanın aynı anda birden fazla kopyasının açılmasını engeller, tekrarlı tıklamalarda mevcut pencereyi öne getirir.
*   **Kolay Kurulum:** Özelleştirilmiş NSIS yapılandırması sayesinde dizin seçimine izin veren standart Windows Setup (`.exe`) aracı.

## Geliştirme ve Kurulum

Projeyi bilgisayarınızda çalıştırmak veya yeniden derlemek için aşağıdaki adımları izleyebilirsiniz.

### Gereksinimler
*   [Node.js](https://nodejs.org/) (Sisteminizde yüklü olmalıdır)

### Kurulum Adımları

1. **Bağımlılıkları Yükleyin:**
   Kütüphaneleri ve Electron çekirdeğini indirmek için terminalde çalıştırın:
   ```bash
   npm install
