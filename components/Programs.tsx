import Image from 'next/image';

const programs = [
  {
    title: 'Empowering Dreams Through Education',
    description: 'We believe that education is the key to unlocking potential. Our scholarship programs remove financial barriers, enabling students to focus on their studies, pursue their passions, and shape a brighter future.',
    image: '/program1.jpg',
  },
  {
    title: 'Health & Wellness for Thriving Communities',
    description: 'Health is wealth. Through hospital visits, wellness workshops, and health drives, we bring essential support and compassion to those in need, fostering healthier, happier lives for individuals and families.',
    image: '/program2.jpg',
  },
  {
    title: 'Building Foundations with Affordable Housing',
    description: 'A safe home is the cornerstone of stability. We support families in securing affordable housing, nurturing resilient communities where everyone has the foundation to grow and flourish.',
    image: '/program3.jpg',
  },
];

export default function Programs() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 font-sans">Our Impactful Programs</h2>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto leading-relaxed">
          Creating positive change through initiatives that uplift, inspire, and provide support to those who need it most.
        </p>
      </div>
      <div className="container mx-auto flex flex-wrap justify-center">
        {programs.map((program, index) => (
          <div key={index} className="w-full md:w-1/3 p-6">
            <div className="bg-white rounded-lg shadow-md shadow-gray-200 border border-gray-200 overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg">
              <Image src={program.image} alt={program.title} width={400} height={250} layout="responsive" objectFit="cover" className="w-full h-auto object-cover" />
              <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold mb-3 text-gray-900">{program.title}</h3>
                <p className="text-gray-600 leading-relaxed">{program.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
