import Image from 'next/image';

export default function AboutUs() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-8 text-center">
          What is the Woolworths Group Foundation?
        </h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-10">
            <div className="max-w-prose">
              <p className="text-gray-800 mb-5 leading-relaxed">
                At Woolworths Group, we recognize the far-reaching impact we have on the communities we serve and understand the role we can play in driving positive change.
              </p>
              <p className="text-gray-800 mb-5 leading-relaxed">
                In our 100th year of operation, the Woolworths Group Foundation—a charity dedicated to collecting and swiftly distributing donations to those in need—plays a key role in how we support communities impacted by natural disasters.
              </p>
              <p className="text-gray-800 leading-relaxed">
                As Australian communities are increasingly impacted by fires, floods, and other natural disasters, the Woolworths Group Foundation allows us to rapidly deploy support and direct funds to help those in times of need. Our Foundation leverages capabilities across our business and partners with charities to deliver immediate support to communities in crisis.
              </p>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <Image 
              src="/about-us.jpg" 
              alt="About Us" 
              className="rounded-lg shadow-lg w-full"
              layout="responsive"
              width={600}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
