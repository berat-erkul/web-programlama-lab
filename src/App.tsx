function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 transition-colors">
      <button
        onClick={() => document.documentElement.classList.toggle('dark')}
        className="fixed top-4 right-4 z-50 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-2 rounded-full shadow-lg hover:scale-110 transition-transform"
        aria-label="Tema değiştir"
      >
        <span className="dark:hidden">&#9790;</span>
        <span className="hidden dark:inline">&#9728;</span>
      </button>

      <section className="px-4 py-12 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          Projelerim
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <img src="/proje1.png" alt="E-Ticaret" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">E-Ticaret Sitesi</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">React ve Node.js ile tam kapsamlı uygulama.</p>
            </div>
          </article>

          <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <img src="/proje2.png" alt="Portföy" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">Kişisel Portföy</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Semantik HTML ve erişilebilirlik ilkeleri ile.</p>
            </div>
          </article>

          <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <img src="/proje1.png" alt="Blog" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">Blog Platformu</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">TypeScript ve Vite ile modern blog.</p>
            </div>
          </article>
        </div>
      </section>
    </div>
  )
}

export default App
