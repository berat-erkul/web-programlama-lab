import { useState, useEffect } from "react";
import type {
  Project, Category, SortField, SortOrder
} from "./types/project";
import { fetchProjects } from
  "./services/projectService";
import { applyFilters } from
  "./utils/projectHelpers";
import Card from "./components/Card";
import Input from "./components/Input";
import Button from "./components/Button";
import Alert from "./components/Alert";

export default function App() {
  // --- STATE ---
  const [projects, setProjects] =
    useState<Project[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] =
    useState<Category | "all">("all");
  const [sortField, setSortField] =
    useState<SortField>("year");
  const [sortOrder, setSortOrder] =
    useState<SortOrder>("desc");
  const [loading, setLoading] = useState(true);
  const [error, setError] =
    useState<string | null>(null);

  // --- VERi CEKME ---
  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchProjects();
        setProjects(data);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Bilinmeyen hata"
        );
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  // --- TURETILMIS (DERIVED) VERi ---
  const filtered = applyFilters(
    projects, search, category,
    sortField, sortOrder
  );

  const categories: (Category | "all")[] =
    ["all", "frontend", "fullstack", "backend"];

  // --- UI ---
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors">
      {/* Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-800 text-white p-2 z-50"
      >
        Ana içeriğe atla
      </a>

      {/* Dark Mode Toggle */}
      <button
        onClick={() => document.documentElement.classList.toggle('dark')}
        className="fixed top-4 right-4 z-50 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-2 rounded-full shadow-lg hover:scale-110 transition-transform"
        aria-label="Tema değiştir"
      >
        <span className="dark:hidden">&#9790;</span>
        <span className="hidden dark:inline">&#9728;</span>
      </button>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center gap-3">
          <h1 className="text-xl font-bold text-blue-800 dark:text-blue-300">
            Berat Erkul
          </h1>
          <nav aria-label="Ana navigasyon">
            <ul className="flex flex-wrap gap-2">
              <li>
                <a href="#hakkimda" className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors">
                  Hakkımda
                </a>
              </li>
              <li>
                <a href="#projeler" className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors">
                  Projeler
                </a>
              </li>
              <li>
                <a href="#iletisim" className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors">
                  İletişim
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="main-content">
        {/* Hakkımda */}
        <section id="hakkimda" className="py-16 px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
            <figure className="shrink-0">
              <img
                src="/profil.jpg"
                alt="Berat Erkul'ın vesikalık fotoğrafı"
                className="w-40 h-40 rounded-full object-cover shadow-lg"
              />
            </figure>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center md:text-left">
                Hakkımda
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Web tasarımı ve programlama alanında kendimi geliştiriyorum. Semantik HTML,
                erişilebilirlik ve modern front-end teknolojileri ile kullanıcı odaklı arayüzler
                oluşturmayı hedefliyorum.
              </p>
              <ul className="flex flex-wrap gap-2">
                <li className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm">React</li>
                <li className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm">TypeScript</li>
                <li className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm">Tailwind</li>
                <li className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm">Vite</li>
                <li className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm">Git</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projelerim — JSON'dan Fetch + Filtreleme + Sıralama */}
        <section id="projeler" className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
              Projelerim
            </h2>

            {/* HATA DURUMU */}
            {error && (
              <Alert variant="error" title="Hata">
                {error}
              </Alert>
            )}

            {/* FILTRELER */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Input
                id="search"
                placeholder="Proje ara..."
                value={search}
                onChange={e => setSearch(e.target.value)}
              />

              <div className="flex gap-2 flex-wrap">
                {categories.map(cat => (
                  <Button
                    key={cat}
                    variant={category === cat ? "primary" : "ghost"}
                    size="sm"
                    onClick={() => setCategory(cat)}
                  >
                    {cat === "all" ? "Tumu" : cat}
                  </Button>
                ))}
              </div>

              <div className="flex gap-2">
                <select
                  value={sortField}
                  onChange={e => setSortField(
                    e.target.value as SortField
                  )}
                  className="border rounded-lg px-3 py-2 dark:bg-gray-800 dark:text-white"
                >
                  <option value="year">Yil</option>
                  <option value="title">Baslik</option>
                </select>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSortOrder(
                    o => o === "asc" ? "desc" : "asc"
                  )}
                >
                  {sortOrder === "asc" ? "A-Z" : "Z-A"}
                </Button>
              </div>
            </div>

            {/* YUKLENIYOR */}
            {loading && (
              <p className="text-center text-gray-500">
                Yukleniyor...
              </p>
            )}

            {/* PROJE LISTESI */}
            {!loading && filtered.length === 0 && (
              <p className="text-center text-gray-500">
                Eslesen proje bulunamadi.
              </p>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map(project => (
                <Card
                  key={project.id}
                  variant="elevated"
                  title={project.title}
                  image={project.image}
                  imageAlt={`${project.title} ekran goruntusu`}
                >
                  <p className="text-sm mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map(t => (
                      <span
                        key={t}
                        className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-0.5 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-gray-400 mt-2">
                    {project.year} &middot; {project.category}
                  </p>
                </Card>
              ))}
            </div>

            {/* SONUC SAYISI */}
            <p className="text-sm text-gray-500 mt-4 text-center">
              {filtered.length} / {projects.length}{" "}
              proje gosteriliyor
            </p>
          </div>
        </section>

        {/* İletişim */}
        <section id="iletisim" className="py-16 px-4">
          <div className="max-w-lg mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
              İletişim
            </h2>
            <form className="space-y-4">
              <Input id="name" label="Ad Soyad" required />
              <Input id="email" label="E-posta" type="email" required />
              <div className="space-y-1">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Mesajınız
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600"
                />
              </div>
              <Button variant="primary" size="lg" type="submit">
                Gönder
              </Button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 text-center py-6 px-4 text-gray-500 dark:text-gray-400 text-sm">
        <p>&copy; 2025 Berat Erkul. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  );
}
