import Image from 'next/image';
import Link from 'next/link';

export default function VacationVoucherPage() {
  return (
    <div className="bg-gray-50 py-10">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Header Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-blue-600 mb-4">
            🌟 Win a $5000 Inspiring Vacations Voucher! 🌟
          </h1>
          <p className="text-lg text-gray-700">
            Ready to turn your dream vacation into reality? Enter our Game of Chance for an incredible opportunity to win a $5,000 travel voucher! (AU Residents Only)
          </p>
        </section>

        {/* Hero Image */}
        <div className="relative mb-12">
          <Image
            src="/Melbourne.png"
            alt="Inspiring Vacations"
            layout="responsive"
            width={1200}
            height={600}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* General Information Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">General Information</h2>
          <p className="text-gray-700 leading-relaxed">
            Everything you need to know about entering the Promotion is outlined here. By participating, you agree to our Terms and Conditions.
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-4">
            <li>Open to Australian residents (excluding South Australia and ACT) aged 18 or older.</li>
            <li>Promotion runs from <strong>6 November 2024</strong> to <strong>14 November 2024</strong>.</li>
            <li>The Promoter is Inspiring Vacations Pty Ltd (ABN 22 623 610 711).</li>
            <li>Employees and their immediate families are ineligible to participate.</li>
          </ul>
        </section>

        {/* How to Enter Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">How to Enter</h2>
          <p className="text-gray-700 leading-relaxed">
            Participating is easy! Simply complete the online entry form during the Promotional Period with your name and email. By entering, you agree to receive updates and promotional offers from Inspiring Vacations.
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-4">
            <li>One entry per person. Duplicate entries will be invalid.</li>
            <li>No purchase required to enter.</li>
            <li>All entries must be submitted before the promotion ends.</li>
          </ul>
        </section>

        {/* Prize Details Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Prize Details</h2>
          <p className="text-gray-700 leading-relaxed">
            The winner will receive a $5,000 Inspiring Vacations Travel Voucher to create their ultimate travel experience. Here’s what you need to know:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-4">
            <li>The voucher is non-transferable and cannot be redeemed for cash.</li>
            <li>Must be used in one transaction for available tours.</li>
            <li>Expenses exceeding $5,000 are the winner's responsibility.</li>
            <li>Changes to bookings are not allowed once confirmed.</li>
          </ul>
        </section>

        {/* Winner Selection Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Winner Selection</h2>
          <p className="text-gray-700 leading-relaxed">
            This is a game of chance. A random draw will determine the winner on <strong>18 November 2024</strong>. The winner will be contacted via email and announced on our website.
          </p>
          <p className="text-gray-700 mt-4">
            If unclaimed within two business days, a new winner will be selected.
          </p>
        </section>

        {/* Additional Terms Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Additional Terms & Conditions</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Taxes and personal expenses are the winner's responsibility.</li>
            <li>Winners agree to share images and videos for promotional purposes.</li>
            <li>The prize is non-negotiable and cannot be deferred.</li>
            <li>In unforeseen circumstances, Inspiring Vacations reserves the right to alter the prize.</li>
          </ul>
        </section>

        {/* Call to Action */}
        <div className="text-center">
          <Link href="/register">
            <a className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700 transition">
              Enter the Competition Now!
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
