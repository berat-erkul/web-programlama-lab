export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8 px-4 text-center text-sm text-gray-600 dark:text-gray-400">
      <p>&copy; {new Date().getFullYear()} Portföy. Tüm hakları saklıdır.</p>
    </footer>
  );
}
