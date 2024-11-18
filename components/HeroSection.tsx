import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Responsive Image for Background */}
      <picture>
        {/* Mobile Image */}
        <source
          srcSet="/hero-mobile.jpg"
          media="(max-width: 768px)"
        />
        {/* Desktop Image */}
        <Image
          src="/hero-desktop.jpg"
          alt="Hero Image"
          fill
          quality={75}
          style={{ objectFit: "cover", position: "absolute" }}
          className="inset-0"
        />
      </picture>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">
          Outback Escapes
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl leading-relaxed">
          Luxury Adventures Across Australia
        </p>
        <Link
          href="/promo"
          className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg transition duration-200 transform hover:scale-105"
        >
          Apply now
        </Link>
      </div>
    </section>
  );
}
