import Image from 'next/image';

export default function AboutUs() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 via-white to-blue-50">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-extrabold text-blue-700 mb-10 text-center">
          Outback Escapes
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Discover a land of wonder, from iconic landmarks to breathtaking hidden treasures. Adventure awaits!
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                At Outback Escapes, we specialize in crafting exclusive journeys for Australian citizens. Explore the Sydney Opera House, the Great Barrier Reef, and beyond. Whether you seek serene beaches or vibrant cityscapes, we curate all-inclusive trips that bring Australia’s magic to life.
              </p>
              <p className="text-lg text-gray-700 font-semibold leading-relaxed">
                Let us guide you through unforgettable experiences that showcase the true beauty of our great nation.
              </p>
            </div>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/Travel-Buddies-Tour.png"
              alt="Outback Escapes"
              className="rounded-lg shadow-xl"
              layout="responsive"
              width={600}
              height={400}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
