import './App.css'

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Ana içeriğe atla
      </a>
      <header>
        <h1>Berat Erkul - Kişisel Portföy</h1>
        <nav aria-label="Ana navigasyon">
          <ul>
            <li><a href="#hakkimda">Hakkımda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </nav>
      </header>

      <main id="main-content">
        <section id="hakkimda">
          <h2>Hakkımda</h2>
          <figure>
            <img src="/profil.jpg" alt="Berat Erkul'in vesikalik fotografi" />
            <figcaption>Berat Erkul</figcaption>
          </figure>
          <p>
            Web tasarımı ve programlama alanında kendimi geliştiriyorum. Semantik HTML,
            erişilebilirlik ve modern front-end teknolojileri ile kullanıcı odaklı arayüzler
            oluşturmayı hedefliyorum.
          </p>
          <p>Kullandığım teknolojiler:</p>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Vite</li>
          </ul>
        </section>

        <section id="projeler">
          <h2>Projelerim</h2>
          <article>
            <h3>Web LAB-1 - Vite React Projesi</h3>
            <p>
              Vite ile oluşturulmuş React uygulaması. Hızlı geliştirme deneyimi ve modern
              build araçları ile tek sayfa uygulama (SPA) yapısı.
            </p>
            <p><strong>Kullanılan teknolojiler:</strong> React, Vite, TypeScript</p>
            <img src="/proje1.png" alt="LAB-1 Vite React projesi ana sayfa ekran görüntüsü" />
          </article>
          <article>
            <h3>Kişisel Portföy Sayfası</h3>
            <p>
              Semantik HTML, erişilebilirlik ilkeleri ve doğrulamalı iletişim formu içeren
              tek sayfalık kişisel portföy. Skip link, ARIA etiketleri ve anlamlı yapı.
            </p>
            <p><strong>Kullanılan teknolojiler:</strong> HTML5, CSS3, React, Vite</p>
            <img src="/proje2.png" alt="Semantik HTML ile hazırlanan portföy sayfası ekran görüntüsü" />
          </article>
        </section>

        <section id="iletisim">
          <h2>İletişim</h2>
          <form action="#" method="post" noValidate>
            <fieldset>
              <legend>İletişim Formu</legend>
              <div className="form-group">
                <label htmlFor="name">Ad Soyad :</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  minLength={2}
                  aria-describedby="name-error"
                />
                <small id="name-error" className="error-msg" role="alert"></small>
              </div>
              <div className="form-group">
                <label htmlFor="email">E-posta :</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  aria-describedby="email-error"
                />
                <small id="email-error" className="error-msg" role="alert"></small>
              </div>
              <div className="form-group">
                <label htmlFor="subject">Konu :</label>
                <select
                  id="subject"
                  name="subject"
                  required
                  aria-describedby="subject-error"
                >
                  <option value="">-- Seçiniz --</option>
                  <option value="is">İş Teklifi</option>
                  <option value="soru">Soru</option>
                  <option value="oneri">Öneri</option>
                </select>
                <small id="subject-error" className="error-msg" role="alert"></small>
              </div>
              <div className="form-group">
                <label htmlFor="message">Mesajınız :</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  minLength={10}
                  aria-describedby="message-error"
                />
                <small id="message-error" className="error-msg" role="alert"></small>
              </div>
              <button type="submit">Gönder</button>
            </fieldset>
          </form>
        </section>
      </main>

      <footer>
        <p>© 2025 Berat Erkul. Tüm hakları saklıdır.</p>
        <nav aria-label="Sosyal medya">
          <ul className="footer-links">
            <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub (yeni sekmede açılır)">GitHub</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (yeni sekmede açılır)">LinkedIn</a></li>
          </ul>
        </nav>
      </footer>
    </>
  )
}

export default App
