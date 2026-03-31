import ContactForm from "../forms/ContactForm";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-16 px-4 bg-gray-50 dark:bg-gray-900"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-3xl mx-auto">
        <h2
          id="contact-heading"
          className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-2"
        >
          İletişim
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
          Aşağıdaki formdan bana ulaşabilirsiniz.
        </p>
        <ContactForm />
      </div>
    </section>
  );
}
