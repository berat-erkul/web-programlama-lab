const skills = [
  { name: "HTML & Semantik yapı", level: "İleri" },
  { name: "CSS & Responsive", level: "İleri" },
  { name: "TypeScript", level: "Orta" },
  { name: "React", level: "Orta" },
  { name: "Git & İş akışı", level: "Orta" },
];

export default function Skills() {
  return (
    <section
      className="py-16 px-4 bg-gray-50 dark:bg-gray-900"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-4xl mx-auto">
        <h2
          id="skills-heading"
          className="text-3xl font-bold text-gray-900 dark:text-white mb-2"
        >
          Yetenekler
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Üzerinde çalıştığım teknoloji ve pratikler
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {skills.map(skill => (
            <li
              key={skill.name}
              className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 flex justify-between items-center"
            >
              <span className="font-medium text-gray-900 dark:text-white">
                {skill.name}
              </span>
              <span className="text-sm text-blue-600 dark:text-blue-400">
                {skill.level}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
