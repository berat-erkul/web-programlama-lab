# 10 Lighthouse ile Erişilebilirlik Testi

Erişilebilirlik kurallarını uyguladığını ölçülebilir şekilde doğrulamak için Google’ın Lighthouse aracını kullanacağız. Lighthouse, Chrome tarayıcısına entegre bir denetim aracıdır.

**Kaynak:** Web Tasarımı ve Programlama LAB-2

---

## Teorik Arka Plan

Lighthouse aşağıdaki kategorilerde sayfa analizi yapar:

- **Performance:** Sayfa yüklenme hızı.
- **Accessibility:** Erişilebilirlik uyumu.
- **Best Practices:** Genel iyi pratikler.
- **SEO:** Arama motoru optimizasyonu.

Bu LAB’da odağımız **Accessibility (Erişilebilirlik)** kategorisidir. **Hedefimiz 90+ puan almak.**

---

## Uygulama Adımı

### Uygulama-7: Lighthouse Raporu Oluştur

1. Projeyi `npm run dev` ile çalıştır ve sayfayı Google Chrome’da aç.
2. Sağ tıkla → **Inspect** (veya F12) ile DevTools’u aç.
3. Üst menüde **Lighthouse** sekmesine tıkla (görünmüyorsa **>>** simgesine tıklayarak bul).
4. **Ayarlar:**
   - **Mode:** Navigation
   - **Device:** Desktop (veya Mobile)
   - **Categories:** Sadece **Accessibility** işaretle (diğerlerini kaldır, böylece daha hızlı çalışır).
5. **Analyze page load** butonuna tıkla.
6. Rapor oluşturulunca erişilebilirlik puanını not et.
7. Eğer puan 90’ın altındaysa, rapordaki hata ve uyarıları oku; her birini düzelt ve tekrar çalıştır.

---

## Derinlemesine Anlama

### Lighthouse Hangi Kontrolleri Yapar?

Erişilebilirlik kategorisinde Lighthouse şunları kontrol eder (tam olmayan liste):

- Görsellerde alt metin var mı?
- Form alanlarında label var mı?
- Heading hiyerarşisi mantıklı mı (seviye atlama yok mu)?
- Metin/arka plan renk kontrastı yeterli mi (en az 4.5:1 oranı)?
- Sayfa dili belirtilmiş mi (`<html lang="tr">`)?
- Bağlantı metinleri anlamlı mı (“tıklayın” yerine “portföyü görüntüle” gibi)?
- ARIA öznitelikleri doğru kullanılmış mı?
- Tab sırası mantıklı mı?

---

## Dikkat – Sık Yapılan Hatalar

- **Lighthouse 100 puan vermesi**, sitenin %100 erişilebilir olduğu anlamına gelmez. Lighthouse otomatik olarak kontrol edilebilecek kuralları test eder; **manuel test** (gerçek ekran okuyucu ile deneme) de gereklidir.
- Lighthouse’u **Incognito (Gizli)** modda çalıştırmak daha güvenilir sonuçlar verir çünkü tarayıcı eklentileri sonuçları etkileyebilir.
- **Renk kontrastı** hatası alıyorsan, arka plan ile metin rengi arasındaki kontrastı artır. https://webaim.org/resources/contrastchecker/ adresinden kontrol edebilirsin.

---

## Sırada Ne Var?

Lighthouse raporu aldık ve erişilebilirlik puanımızı gördük. Şimdi tüm çalışmayı Git ile kayıt altına alıp GitHub’a yükleyelim ve teslim kontrol listesine geçelim.
