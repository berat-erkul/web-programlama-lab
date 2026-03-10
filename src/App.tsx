function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <section className="px-4 py-12 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Projelerim</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <article className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="/proje1.png" alt="E-Ticaret" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">E-Ticaret Sitesi</h3>
              <p className="text-gray-600 text-sm">React ve Node.js ile tam kapsamlı uygulama.</p>
            </div>
          </article>

          <article className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="/proje2.png" alt="Portföy" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">Kişisel Portföy</h3>
              <p className="text-gray-600 text-sm">Semantik HTML ve erişilebilirlik ilkeleri ile.</p>
            </div>
          </article>

          <article className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="/proje1.png" alt="Blog" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">Blog Platformu</h3>
              <p className="text-gray-600 text-sm">TypeScript ve Vite ile modern blog.</p>
            </div>
          </article>
        </div>
      </section>
    </div>
  )
}

export default App
