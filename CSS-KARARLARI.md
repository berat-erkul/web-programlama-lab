1.Breakpoint Seçimi

   640 px ve 1024 px değerlerini, cihaz türüne değil içerik bozulmaya başladığı anda göre belirledim.
   Mobilde (0–639 px) içerik tek sütun ve dikey hizalı kalır; 640 px üzerindeyken tablet görünümüne geçerek boşluklar artar ve “Hakkımda” bölümü iki sütuna bölünür. 1024 px üzeri masaüstünde ise genişliği 1200 px ile sınırlayarak okunabilir bir alan oluştururum.
   Bu sayede mobilde tek odaklı bir sunum sağlarken, tablet ve masaüstünde yatay alanı verimli kullanarak proje kartlarını en az üç sütunlu bir ızgara şeklinde gösteririm.


2.Layout Tercihleri

   Header için Flexbox kullandım. Logo ve navigasyon linkleri tek eksende hizalanmalı, bazen sarmalanması gereken klasik bir satır düzeni var.
   justify-content: space-between;
   align-items: center;
   flex-wrap: wrap;
   Bu kurulum, masaüstünde yatay bir menü, mobilde ise dikey yığılmış bir navigasyon sunar.
   Proje kartları için ise Grid tercih ettim çünkü satır ve sütun bazında esnek kontrol gerekiyor.
   repeat(auto-fit, minmax(280px, 1fr))
   Her kartın minimum genişliği 280 px tutularak ekran genişliğine göre otomatik sütun sayısı ayarlanır. auto-fit sayesinde boş sütun bırakmadan mevcut alan doldurulur; böylece geniş ekranlarda kartlar dengeli ve boşluksuz görünür.


3.Design Token’ları

   Renk paletinde mavi tonlarını (--color-primary, --color-secondary) ana vurgu rengi olarak seçtim. Header, linkler ve butonlar bu renkleri kullanarak tutarlı bir marka hissi verir. Nötr tonlar (--color-bg, --color-text, --color-muted, --color-surface, --color-border) ise içerik alanlarını okunaklı ve kontrastlı tutar.
   Spacing skalasını tamamen rem tabanlı ve 4 px katları şeklinde tanımladım:
   --space-xs 4 px
   --space-sm 8 px
   --space-md 16 px
   … vb.
   Böylece bileşenler arası boşluklar tutarlı kalır ve tipografiyle orantılı bir şekilde ayarlanabilir.
   Fluid typography için clamp() fonksiyonları kullandım. Temel metin boyutu yaklaşık 16 px civarında tutulurken başlıklar ekran genişledikçe akıcı bir şekilde büyür. Alt ve üst sınırlar makul seviyede, orta kısımda ise rem + vw karışımı kullanarak hem zoom desteğini hem de viewport’a göre ölçeklenmeyi korurum.


4.Responsive Stratejiler

   Tüm CSS’i mobile‑first yaklaşımıyla yazdım: öncelikle en küçük ekran için varsayılan stilleri tanımladım, ardından
   @media (min-width: 640px) { … }
   @media (min-width: 1024px) { … }
   ile tablet ve masaüstü eklemeleri yaptım. Böylece mobil kullanıcılar sadece temel stilleri alır, büyük ekranlar ek düzenlemelerle zenginleşir.
   Breakpoint’lerde “about‑content” düzeni tek sütundan iki sütuna geçer, section padding’leri ve “project‑grid” sütun sayısı değişir. Header ve navigasyon 639 px altında dikey yığına geçer; üzerindeyken yatay ve satır içinde bir görünüm oluşur.
   Görselleri her yerde max-width: 100%, height: auto ve kartlarda object-fit: cover ile kullandım. Böylece taşma yapmadan, farklı en-boy oranlarında bozulmadan tutarlı görseller elde edilir.
   Bu kararlarla, hem estetik hem de fonksiyonel açıdan dengeli, tüm cihazlarda sorunsuz çalışan bir tasarım ortaya koymayı hedefledim.