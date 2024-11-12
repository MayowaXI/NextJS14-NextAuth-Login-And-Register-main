// components/ManagementTeam.jsx
import Image from 'next/image';

const managementTeam = [
  {
    name: 'Bill Reid',
    role: 'Board Director (Chief Legal Officer)',
    image: '/BillReid.avif',
  },
  {
    name: 'Jeanette Fenske',
    role: 'Board Director (Director of Stores, Supermarkets)',
    image: '/leanne.avif',
  },
  {
    name: 'Kate Eastoe',
    role: 'Chair (Group Company Secretary)',
    image: '/Kate.avif',
  },
];

export default function ManagementTeam() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-600 mb-4">Meet the Board and Management Team</h2>
        <p className="text-gray-700 text-lg">Introducing the leaders driving our mission forward.</p>
      </div>
      <div className="container mx-auto flex flex-wrap justify-center gap-8">
        {managementTeam.map((member, index) => (
          <div key={index} className="w-full md:w-1/3 lg:w-1/4 bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center transform transition-transform hover:scale-105">
            <Image src={member.image} alt={member.name} width={400} height={250} objectFit="cover"  />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">{member.name}</h3>
            <p className="text-blue-500 text-sm font-medium">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
