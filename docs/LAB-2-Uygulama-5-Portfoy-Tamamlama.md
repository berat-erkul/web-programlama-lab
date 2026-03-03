# 9 Uygulama: Kişisel Portföy Sayfası

Bu bölümde, öğrendiğin tüm kavramları birleştirerek tek sayfalık bir kişisel portföy web sayfası oluşturacaksın. Sayfa semantik HTML ile yapılandırılacak, erişilebilirlik ilkelerine uygun olacak ve bir iletişim formu içerecek.

**Kaynak:** Web Tasarımı ve Programlama LAB-2

---

## Uygulama Adımı

### Uygulama-5: Portföy Sayfasını Tamamla

Aşağıdaki adımları sırayla uygula:

#### 1. Header ve Navigasyon
- Adını veya logonu içeren bir `<header>` oluştur.
- Sayfa içi bağlantılar içeren bir `<nav>` ekle (`aria-label` ile etiketle).
- "Ana içeriğe atla" bağlantısını (skip link) ekle.

#### 2. Hakkımda Bölümü (`<section id="hakkimda">`)
- `<h2>` ile bölüm başlığı.
- Profil fotoğrafı (`<figure>` + `<img alt="...">` + `<figcaption>`).
- Kısa bir tanıtım paragrafı.
- Kullandığın teknolojiler listesi (`<ul>`).

#### 3. Projelerim Bölümü (`<section id="projeler">`)
- En az 2 proje kartı. Her biri bir `<article>` içinde:
  - `<h3>` ile proje adı, kısa açıklama, kullanılan teknolojiler.
  - Varsa ekran görüntüsü (alt metinli).

#### 4. İletişim Bölümü (`<section id="iletisim">`)
- Uygulama-4'te oluşturduğun doğrulamalı iletişim formunu buraya yerleştir.

#### 5. Footer
- Telif hakkı bilgisi.
- Sosyal medya bağlantıları (varsa).
