import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import Footer from "@/components/Footer.jsx/page";
import {
  Truck,
  Clock,
  Thermometer,
  Shield,
  Clipboard,
  Box,
  MapPin,
  Heart,
} from "lucide-react";
import Image from "next/image";

function ShippingPage() {
  const deliverySteps = [
    {
      icon: <Shield className="w-10 h-10 text-emerald-500" />,
      title: "Health Check",
      description:
        "Complete veterinary examination including necessary vaccinations and tests to ensure your Irish Wolfhound puppy is healthy and ready for travel.",
    },
    {
      icon: <Clipboard className="w-10 h-10 text-emerald-500" />,
      title: "Booking & Documentation",
      description:
        "We arrange delivery appointments and provide a detailed itinerary with tracking information so you can follow your puppy's journey.",
    },
    {
      icon: <Truck className="w-10 h-10 text-emerald-500" />,
      title: "Transportation",
      description:
        "Professional pickup and airport transfer with continuous updates throughout the journey to keep you informed every step of the way.",
    },
    {
      icon: <Heart className="w-10 h-10 text-emerald-500" />,
      title: "Welcome Home",
      description:
        "Your Irish Wolfhound arrives safely at your local airport where you'll meet your new family member, ready to begin your life together.",
    },
  ];

  const shippingFAQs = [
    {
      question: "How old must puppies be before shipping?",
      answer:
        "Irish Wolfhound puppies must be at least 12 weeks old before they can be shipped. This ensures they are properly weaned and developmentally ready for travel.",
    },
    {
      question: "Is shipping stressful for the puppies?",
      answer:
        "We take every precaution to minimize stress. Puppies are acclimated to their travel crates before the journey, and we only use pet-friendly airlines with climate-controlled cargo areas.",
    },
    {
      question: "How long does shipping typically take?",
      answer:
        "Domestic shipping usually takes 1-6 hours depending on your location. We arrange direct flights whenever possible to minimize travel time.",
    },
    {
      question: "What happens if there are flight delays?",
      answer:
        "Our team monitors all flights and will keep you updated about any changes. Airlines have protocols to ensure pets are cared for during delays.",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[50vh] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/cover_tk.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 to-emerald-700/70" />
        </div>
        <div className="relative h-full w-full flex flex-col justify-center items-center text-white px-4">
          <span className="text-emerald-300 uppercase tracking-wider font-semibold mb-2">
            Safe & Secure Transport
          </span>
          <h1 className="text-3xl text-center md:text-5xl font-bold mb-4">
            SHIPPING & DELIVERY
          </h1>
          <p className="text-xl text-center text-emerald-100 max-w-2xl">
          We deliver our Irish Wolfhound puppies via secure and reliable
          carriers to ensure they arrive safely at their new homes.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Introduction */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16 border border-gray-100">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3">
              <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/images/Kennel-being-loaded.jpg"
                  alt="Puppy transportation"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Our Shipping Promise
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Our accomplished staff has extensive experience in the animal
                shipping industry and will make your transportation experience
                as smooth as possible. Our Irish Wolfhounds are transported with
                the most trusted carriers; they all have pressurized cabins with
                climate control systems, and the dogs are flown in a special
                compartment for pets. We strive to provide you with exceptional
                customer service from start to finish. We explain every detail
                and provide full flight and tracking details so you can stay
                connected with your Irish Wolfhound during transit.
              </p>
            </div>
          </div>
        </div>

        {/* Delivery Process */}
        <div className="text-center mb-12">
          <span className="text-emerald-600 font-medium">THE JOURNEY HOME</span>
          <h2 className="text-3xl font-bold mt-2 text-gray-800">
            Our Delivery Process
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mt-4 mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {deliverySteps.map((step, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-center"
              >
                <div className="bg-emerald-50 w-20 h-20 rounded-full flex items-center justify-center mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-center">{step.description}</p>
                <div className="mt-6 w-full">
                  {index < deliverySteps.length - 1 && (
                    <div className="hidden md:block border-t-2 border-dashed border-emerald-300 w-full mt-4"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Delivery Timeline */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12 border border-gray-100">
          <div className="flex items-center mb-6">
            <div className="bg-emerald-100 p-3 rounded-full mr-4">
              <Clock className="w-6 h-6 text-emerald-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">
              DELIVERY TIMELINE
            </h2>
          </div>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Provided your Irish Wolfhound puppy is at least twelve weeks old and has
            all the required medical records for shipment, we usually arrange
            delivery within 24-48 hours of confirmation. Our team works diligently
            to ensure a smooth and efficient process, keeping you informed at every
            step.
          </p>
          <div className="bg-emerald-50 p-6 rounded-lg border-l-4 border-emerald-500">
            <p className="text-emerald-800 font-medium">
              <strong>Important Note:</strong> We require advance notice to
              arrange proper transportation. This allows us to secure the best
              travel arrangements for your Irish Wolfhound's comfort and safety.
              Please contact us as soon as possible after confirming your
              adoption to begin the shipping process.
            </p>
          </div>
        </div>

        {/* Travel Considerations */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16 border border-gray-100">
          <div className="flex items-center mb-6">
            <div className="bg-emerald-100 p-3 rounded-full mr-4">
              <Thermometer className="w-6 h-6 text-emerald-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">
              WEATHER CONSIDERATIONS
            </h2>
          </div>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Irish Wolfhounds are adaptable to various temperatures, but we still take
            weather conditions seriously when arranging transportation. During
            extreme weather (either hot or cold), we implement special protocols
            to ensure your puppy's comfort and safety throughout the journey.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-emerald-50 p-6 rounded-lg">
              <h3 className="font-semibold text-emerald-800 mb-2">
                Hot Weather Protocol
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  <p className="text-gray-700">
                    Early morning or evening flights to avoid peak temperatures
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  <p className="text-gray-700">
                    Extra hydration measures before and during transport
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  <p className="text-gray-700">
                    Temperature monitoring throughout the journey
                  </p>
                </li>
              </ul>
            </div>

            <div className="bg-emerald-50 p-6 rounded-lg">
              <h3 className="font-semibold text-emerald-800 mb-2">
                Cold Weather Protocol
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  <p className="text-gray-700">
                    Insulated travel crates with additional bedding
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  <p className="text-gray-700">
                    Heated cargo areas during transport
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  <p className="text-gray-700">
                    Minimized exposure to outdoor elements during transfers
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Shipping FAQs */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <span className="text-emerald-600 font-medium">
              COMMON QUESTIONS
            </span>
            <h2 className="text-3xl font-bold mt-2 text-gray-800">
              Shipping FAQs
            </h2>
            <div className="w-24 h-1 bg-emerald-500 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {shippingFAQs.map((faq, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
              >
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Information */}
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <Box className="w-6 h-6 text-emerald-500 mr-2" />
            IMPORTANT DETAILS
          </h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start">
              <span className="w-3 h-3 bg-emerald-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
              <p>
                Your Irish Wolfhound will travel in an appropriately sized,
                airline-approved kennel with comfortable bedding and water
                provisions to ensure maximum comfort during the journey.
              </p>
            </li>
            <li className="flex items-start">
              <span className="w-3 h-3 bg-emerald-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
              <p>
                All dogs are transported in the temperature-controlled cargo
                area of the aircraft, specially designed for pet transportation
                with proper ventilation and monitoring.
              </p>
            </li>
            <li className="flex items-start">
              <span className="w-3 h-3 bg-emerald-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
              <p>
                We provide detailed instructions on how to receive your puppy
                at the airport and what documentation to bring with you for a
                smooth pickup process.
              </p>
            </li>
            <li className="flex items-start">
              <span className="w-3 h-3 bg-emerald-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
              <p>
                Each Irish Wolfhound is handled with the utmost care and attention by
                our experienced transportation staff throughout the entire
                journey to ensure their safety and comfort.
              </p>
            </li>
            <li className="flex items-start">
              <span className="w-3 h-3 bg-emerald-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
              <p>
                We recommend scheduling a veterinary check-up within 72 hours of
                arrival to ensure your Irish Wolfhound has handled the journey well
                and to establish care with your local veterinarian.
              </p>
            </li>
          </ul>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-emerald-700 to-emerald-600 rounded-xl shadow-lg p-8 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">
                Ready to bring your Irish Wolfhound home?
              </h2>
              <p className="text-emerald-100">
                Contact us today to discuss shipping options for your new gentle
                giant.
              </p>
            </div>
            <a
              href="/contact"
              className="mt-6 md:mt-0 bg-white text-emerald-700 px-8 py-3 rounded-full font-semibold hover:bg-emerald-50 transition-colors shadow-md"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
}

export default ShippingPage;
