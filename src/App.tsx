import './App.css'

function App() {
  return (
    <>
      <header>
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
          {/* icerik buraya */}
        </section>

        <section id="projeler">
          <h2>Projelerim</h2>
          {/* icerik buraya */}
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
