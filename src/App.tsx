import './App.css'

function App() {
  return (
    <>
      <header>
        <h1>Berat Erkul - Kişisel Portföy</h1>
        <nav>
          <ul>
            <li><a href="#hakkimda">Hakkımda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="hakkimda">
          <h2>Hakkımda</h2>
          <figure>
            <img src="/profil.jpg" alt="Berat Erkul'in vesikalik fotografi" />
            <figcaption>Berat Erkul</figcaption>
          </figure>
        </section>

        <section id="projeler">
          <h2>Projelerim</h2>
          <article>
            <h3>Web LAB-1 - Vite React Projesi</h3>
            <img src="/proje1.png" alt="LAB-1 Vite React projesi ana sayfa ekran görüntüsü" />
          </article>
          <article>
            <h3>Kişisel Portföy Sayfası</h3>
            <img src="/proje2.png" alt="Semantik HTML ile hazırlanan portföy sayfası ekran görüntüsü" />
          </article>
        </section>

        <section id="iletisim">
          <h2>İletişim</h2>
          {/* form buraya */}
        </section>
      </main>

      <footer>
        <p>© 2025 Berat Erkul. Tüm hakları saklıdır.</p>
      </footer>
    </>
  )
}

export default App
