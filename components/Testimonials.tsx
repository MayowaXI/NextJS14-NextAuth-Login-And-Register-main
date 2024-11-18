import Image from 'next/image';

const winners = [
  {
    name: 'Olivia Taylor',
    role: 'Winner from Sydney, NSW',
    image: '/sheilaerin.webp',
  },
  {
    name: 'Liam Thompson',
    role: 'Winner from Melbourne, VIC',
    image: '/look.jpg',
  },
  {
    name: 'Sophia Wilson',
    role: 'Winner from Brisbane, QLD',
    image: '/corin.jpg',
  },
  {
    name: 'James Anderson',
    role: 'Winner from Perth, WA',
    image: '/self2.jpg',
  },
];

export default function WinnersShowcase() {
  return (
    <section className="py-20 bg-gradient-to-b from-teal-50 via-white to-teal-50">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-teal-600 mb-4">Meet Our Lucky Winners</h2>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          Congratulations to the winners of the $500 USD all-expenses-paid trip exclusively for Australian citizens! Meet the adventurers ready to explore their dream destinations.
        </p>
      </div>
      <div className="container mx-auto flex flex-wrap justify-center gap-8">
        {winners.map((winner, index) => (
          <div
            key={index}
            className="w-full md:w-1/3 lg:w-1/4 bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center transform transition-transform hover:scale-105 hover:shadow-2xl"
          >
            <Image
              src={winner.image}
              alt={winner.name}
              width={400}
              height={250}
              objectFit="cover"
              className="rounded-full mb-4"
            />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">{winner.name}</h3>
            <p className="text-teal-500 text-sm font-medium">{winner.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
