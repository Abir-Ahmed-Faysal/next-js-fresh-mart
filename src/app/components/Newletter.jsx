// components/Newsletter.jsx
export default function Newsletter() {
  return (
    <section className="bg-green-50 dark:bg-gray-900 py-16 px-5 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-gray-900 dark:text-white">
        Join Our Newsletter
      </h2>
      <p className="mb-8 text-gray-700 dark:text-gray-300 sm:text-lg">
        Stay updated with the latest products, offers, and promotions from Fresh Mart.
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-xl mx-auto">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full sm:flex-1 p-4 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-800 dark:text-white"
        />
        <button className="w-full sm:w-auto bg-green-500 text-white font-semibold px-6 py-4 rounded-lg hover:bg-green-600 transition">
          Subscribe
        </button>
      </div>
    </section>
  );
}
