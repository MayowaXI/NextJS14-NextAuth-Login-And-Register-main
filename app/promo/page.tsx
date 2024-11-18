import Image from 'next/image';
import Link from 'next/link';

export default function ExploreAndWinPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/White_sundays.png')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-5xl font-extrabold drop-shadow-md mb-4">
            🌍 Win a $5000 Luxury Travel Adventure! 🌍
          </h1>
          <p className="text-lg mb-6">
            Discover paradise. Enter our competition to win a $5000 voucher for your dream destination.
          </p>
          <p className="text-sm italic text-gray-200 mb-6">
            *Note: Open to Australian citizens only. Prize money will be directly deposited into the winner's bank account.*
          </p>
          <Link
            href="/register"
            className="bg-orange-500 text-white py-3 px-6 rounded-lg text-lg font-semibold shadow-md hover:bg-orange-600"
          >
            Enter Now
          </Link>
        </div>
      </section>

      {/* Highlight Destinations Section */}
      <section className="container mx-auto px-6 lg:px-16 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          🌴 Explore Our Dream Destinations 🌴
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Destination 1 */}
          <div className="relative">
            <Image
              src="/Port-Douglas-beach.jpg"
              alt="Port Douglas Beach"
              layout="responsive"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
            />
            <p className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded">
              Soak up the sun in Port Douglas
            </p>
          </div>
          {/* Destination 2 */}
          <div className="relative">
            <Image
              src="/White_sundays.png"
              alt="Whitsundays"
              layout="responsive"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
            />
            <p className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded">
              Sail through the crystal-clear waters of the Whitsundays
            </p>
          </div>
        </div>
      </section>

      {/* Mid-Page Call-to-Action */}
      <section className="bg-blue-100 py-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Ready to Win Your Dream Vacation?
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Don’t wait! Enter our competition today and take the first step toward your adventure of a lifetime.
        </p>
        <Link
          href="/register"
          className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700"
        >
          Enter the Competition Now
        </Link>
      </section>

      {/* Travel Experience Section */}
      <section className="bg-blue-50 py-12">
        <div className="container mx-auto px-6 lg:px-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            ✈️ Experience the Adventure of a Lifetime ✈️
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Experience Image 1 */}
            <div className="relative">
              <Image
                src="/Travel-Buddies-Tour.png"
                alt="Travel Buddies Tour"
                layout="responsive"
                width={600}
                height={400}
                className="rounded-lg shadow-md"
              />
              <p className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded">
                Find your adventure
              </p>
            </div>
            {/* Experience Image 2 */}
            <div className="relative">
              <Image
                src="/Travel-Buddies-Tile-1.png"
                alt="Travel Buddies Tile"
                layout="responsive"
                width={600}
                height={400}
                className="rounded-lg shadow-md"
              />
              <p className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded">
                Explore new cultures
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="container mx-auto px-6 lg:px-16 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          🌟 Hear From Our Happy Travelers 🌟
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Testimonial 1 */}
          <div className="flex items-center space-x-4">
            <Image
              src="/selfie.jpg"
              alt="Happy Traveler"
              width={100}
              height={100}
              className="rounded-full shadow-md"
            />
            <p className="text-gray-700">
              <strong>"Life-changing experience!"</strong> - Sarah, 2023 Winner
            </p>
          </div>
          {/* Testimonial 2 */}
          <div className="flex items-center space-x-4">
            <Image
              src="/self2.jpg"
              alt="Happy Traveler"
              width={100}
              height={100}
              className="rounded-full shadow-md"
            />
            <p className="text-gray-700">
              <strong>"Unforgettable adventure!"</strong> - Mike, 2022 Winner
            </p>
          </div>
        </div>
      </section>

      {/* Footer Call-to-Action */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-6 lg:px-16 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Don’t Miss Out on This Opportunity!
          </h2>
          <p className="text-gray-700 mb-6">
            Hurry! Entries close <strong>14 November 2024</strong>.
          </p>
          <p className="text-sm italic text-gray-600 mb-6">
            *Note: Open to Australian citizens only. Prize money will be directly deposited into the winner's bank account.*
          </p>
          <Link
            href="/register"
            className="bg-orange-500 text-white py-3 px-6 rounded-lg text-lg font-semibold shadow-md hover:bg-orange-600"
          >
            Enter Now
          </Link>
        </div>
      </section>
    </div>
  );
}
