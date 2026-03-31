export default function About() {
  return (
    <section
      id="about"
      className="py-16 px-4 bg-white dark:bg-gray-950"
      aria-labelledby="about-heading"
    >
      <div className="max-w-4xl mx-auto">
        <h2
          id="about-heading"
          className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center md:text-left"
        >
          Hakkımda
        </h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          Web tasarımı ve programlama alanında kendimi geliştiriyorum. Semantik HTML,
          erişilebilirlik ve modern ön yüz teknolojileri ile kullanıcı odaklı arayüzler
          üretmeyi hedefliyorum. React, TypeScript ve Tailwind ile bileşen tabanlı
          arayüzler geliştiriyorum.
        </p>
        <ul className="flex flex-wrap gap-2" aria-label="İlgi alanları">
          <li className="bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
            React
          </li>
          <li className="bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
            TypeScript
          </li>
          <li className="bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
            Tailwind CSS
          </li>
          <li className="bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
            Erişilebilirlik
          </li>
        </ul>
      </div>
    </section>
  );
}
