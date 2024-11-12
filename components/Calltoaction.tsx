// components/CallToAction.jsx
import Link from 'next/link';

export default function CallToAction() {
  return (
    <section className="py-20 bg-blue-500 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Us in Making a Difference</h2>
        <p className="text-xl mb-8">Your support helps us continue our mission and expand our programs.</p>
        <Link
          href="/donate"
          className="bg-white text-blue-500 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100"
        >
          Donate Now
        </Link>
      </div>
    </section>
  );
}
