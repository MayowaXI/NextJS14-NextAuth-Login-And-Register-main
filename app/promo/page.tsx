import Image from 'next/image';
import Link from 'next/link';

export default function VacationVoucherPage() {
  return (
    <div className="bg-gray-50 py-10">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Header Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-blue-600 mb-4">
            Win a $5000 Inspiring Vacations Voucher!
          </h1>
          <p className="text-lg text-gray-700">
            Enter our Game of Chance and stand a chance to win a $5000 all-expenses-paid voucher for your dream vacation! (AU Residents Only)
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
            className="rounded-lg"
          />
        </div>

        {/* General Information Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">General Information</h2>
          <p className="text-gray-700 leading-relaxed">
            Information on how to enter this Promotion, mechanics of entry, and prizes form part of these Conditions of Entry. Entry to this promotion is deemed to be acceptance of these Conditions of Entry by each Entrant.
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-4">
            <li>Entry is open to Australian residents only (excluding South Australia and ACT) over the age of 18.</li>
            <li>Employees or contractors working with Inspiring Vacations and their direct family members are not eligible.</li>
            <li>The Promotion begins at <strong>12:01am AEDT on 6 November 2024</strong> and ends at <strong>11:59pm AEDT on 14 November 2024</strong>.</li>
            <li>The Promoter is Inspiring Vacations Pty Ltd (ABN 22 623 610 711).</li>
          </ul>
        </section>

        {/* How to Enter Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">How to Enter</h2>
          <p className="text-gray-700 leading-relaxed">
            To enter, visit our promotional page during the Promotional Period and complete the online entry form with your first name, last name, and email address. By submitting the form, you agree to receive promotional emails from Inspiring Vacations and consent to our Privacy Policy.
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-4">
            <li>Entries are limited to one per person. Multiple email addresses will invalidate entries.</li>
            <li>No purchase is necessary to enter.</li>
            <li>All entries must be submitted during the Promotional Period to be eligible.</li>
          </ul>
        </section>

        {/* Prize Details Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Prize Details</h2>
          <p className="text-gray-700 leading-relaxed">
            One lucky winner will receive an Inspiring Vacations Travel Voucher worth $5,000 AUD. The voucher must be redeemed to book a tour within three months of prize acceptance.
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-4">
            <li>The prize is awarded “as is” and cannot be transferred, exchanged, or redeemed for cash.</li>
            <li>The voucher must be used in one transaction and can be applied to any tour available at Inspiring Vacations.</li>
            <li>Any expenses beyond $5,000 are the responsibility of the winner.</li>
            <li>Once booking is confirmed, no changes can be made to departure dates or traveler details.</li>
          </ul>
        </section>

        {/* Winner Selection Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Winner Selection</h2>
          <p className="text-gray-700 leading-relaxed">
            This is a game of chance. One winner will be randomly selected on <strong>18 November 2024</strong> at the Promoter’s premises. The winner will be notified via email within two business days and published on the promotional page.
          </p>
          <p className="text-gray-700 mt-4">
            If the winner does not accept the prize within two business days, a replacement winner will be drawn.
          </p>
        </section>

        {/* Additional Terms Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Additional Terms & Conditions</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>All taxes, insurances, and other personal expenses are the responsibility of the winner.</li>
            <li>Winners agree to provide images and footage for promotional purposes.</li>
            <li>The prize cannot be deferred or rebooked under any circumstances.</li>
            <li>In the event of force majeure, Inspiring Vacations reserves the right to cancel the prize.</li>
          </ul>
        </section>

        {/* Call to Action */}
        <div className="text-center">
        <Link href="/register" className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700 transition">
  Enter the Competition Now
</Link>

</div>
      </div>
    </div>
  );
}
