// components/Header.jsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold">
          <Link href="/">
            YourLogo
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/about" className="text-gray-700 hover:text-blue-500">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/programs" className="text-gray-700 hover:text-blue-500">
                Programs
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-700 hover:text-blue-500">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/donate" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Donate
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
