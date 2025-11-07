"use client";
import Banner from "@/components/Banner/Banner";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import Footer from "@/components/Footer.jsx/page";
import {
  Shield,
  Heart,
  ClipboardCheck,
  AlertCircle,
  Award,
  Clock,
  Stethoscope,
  FileCheck,
} from "lucide-react";
import Image from "next/image";

function GuaranteePage() {
  return (
    <section className="min-h-screen bg-gray-50">
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
            Health First Approach
          </span>
          <h1 className="text-3xl text-center md:text-5xl font-bold mb-4">
            Our Commitment to You and Your Irish Wolfhound
          </h1>
          <p className="text-xl text-center text-emerald-100 max-w-3xl">
            We stand behind every Irish Wolfhound puppy we raise with
            comprehensive health guarantees and lifetime support for your peace
            of mind.
          </p>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="max-w-7xl mx-auto px-4 py-12 -mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            icon: <Shield className="w-10 h-10 text-emerald-500" />,
            title: "Lifetime Backing",
            description:
              "Continuous support throughout your Irish Wolfhound's life journey",
          },
          {
            icon: <Heart className="w-10 h-10 text-emerald-500" />,
            title: "Health Guarantee",
            description: "Comprehensive coverage for genetic health conditions",
          },
          {
            icon: <Stethoscope className="w-10 h-10 text-emerald-500" />,
            title: "Veterinary Support",
            description:
              "Professional medical oversight and guidance when needed",
          },
          {
            icon: <FileCheck className="w-10 h-10 text-emerald-500" />,
            title: "Clear Expectations",
            description: "Transparent terms and straightforward conditions",
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 
              transition-transform duration-300 border border-gray-100"
          >
            <div className="bg-emerald-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="space-y-16">
          {/* Introduction */}
          <div className="text-center mb-12">
            <span className="text-emerald-600 font-medium">OUR PROMISE</span>
            <h2 className="text-3xl font-bold mt-2 text-gray-800">
              Health Guarantee Overview
            </h2>
            <div className="w-24 h-1 bg-emerald-500 mx-auto mt-4 mb-8"></div>
          <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
            At Tariq’s Irish Wolfhound Puppies, we prioritize health,
            temperament, and genetic soundness. Our comprehensive health
            guarantee reflects our confidence in our breeding practices and our
            commitment to the well-being of every puppy we place in a new home.
          </p>
          </div>

          {/* Lifetime Backing Section */}
          <section className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <div
                  className="relative h-full w-full rounded-xl overflow-hidden"
                  style={{ minHeight: "250px" }}
                >
                  <Image
                    src="/image-im/WhatsApp%20Image%202025-11-03%20at%2021.00.34_9aa57280.jpg"
                    alt="Irish Wolfhound puppy"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:w-2/3">
                <div className="flex items-center mb-4">
                  <Clock className="w-6 h-6 text-emerald-500 mr-3" />
                  <h2 className="text-3xl font-bold text-gray-800">
                    Lifetime Backing
                  </h2>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We take pride in the fact that our relationship with you
                  doesn't end when you bring home an Irish Wolfhound from us. As
                  reliable breeders, experienced animal instructors, and
                  passionate Wolfhound enthusiasts, we like to believe that
                  nothing can ever go wrong with our dogs.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  However, certain things are never in our control. An Irish
                  Wolfhound’s health is dependent on many factors like genetics,
                  exercise, food and nutrition, and overall care. If something
                  goes wrong, we always strive to help, often even when our
                  guarantee doesn't cover it. While we may not be able to
                  guarantee that your Wolfhound will never have a health
                  problem, we guarantee that we will do our best to ensure your
                  new family member is a healthy one!
                </p>
              </div>
            </div>
          </section>

          {/* Health Guarantee Section */}
          <section className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            <div className="flex items-center mb-6">
              <Award className="w-6 h-6 text-emerald-500 mr-3" />
              <h2 className="text-3xl font-bold text-gray-800">
                Our Health Guarantee
              </h2>
            </div>

            <div className="bg-emerald-50 p-6 rounded-xl mb-6 border-l-4 border-emerald-500">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                First Year Coverage
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We don't believe your Irish Wolfhound is replaceable, but we do
                believe that sometimes the pain can be alleviated with the
                companionship of another gentle giant. In the unlikely event of
                the loss of an Irish Wolfhound within one year from its birth
                due to genetics, or if the puppy is found to have congenital or
                hereditary disorders which adversely affect its health, we will
                replace the puppy with another of equivalent value at no cost to
                you. The cause of death or condition must be certified by a
                licensed veterinarian.
              </p>
            </div>

            <div className="bg-emerald-50 p-6 rounded-xl border-l-4 border-emerald-500">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Extended Coverage
              </h3>
              <p className="text-gray-700 leading-relaxed">
                For genetic conditions that manifest later in life, we offer
                extended coverage. If your Irish Wolfhound develops a serious
                genetic condition within two years of age that significantly
                impacts quality of life (as confirmed by a licensed
                veterinarian), we will provide a credit amounting to 50% of the
                original cost towards the purchase of a replacement puppy of
                similar value.
              </p>
            </div>
          </section>

          {/* Requirements Section */}
          <section className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            <div className="flex items-center mb-6">
              <ClipboardCheck className="w-6 h-6 text-emerald-500 mr-3" />
              <h2 className="text-3xl font-bold text-gray-800">
                What We Need From You
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              Nothing delights us more than knowing we were able to bring a
              healthy, happy Irish Wolfhound to you. We do seek your help to
              ensure your puppy remains healthy. Here are a few measures that
              will help maintain our guarantee:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors duration-300 border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center mr-3">
                    1
                  </div>
                  <h3 className="font-semibold text-gray-800">
                    Initial Veterinary Exam
                  </h3>
                </div>
                <p className="text-gray-700">
                  Send us a copy of the examination (medical record) within 3
                  working days of receiving your Irish Wolfhound. The examination
                  must be performed by a licensed veterinarian. Your puppy will
                  come with up-to-date, age-appropriate vaccinations, so ensure
                  you do not vaccinate within the first ten days of receiving
                  your puppy.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors duration-300 border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center mr-3">
                    2
                  </div>
                  <h3 className="font-semibold text-gray-800">
                    Ongoing Healthcare
                  </h3>
                </div>
                <p className="text-gray-700">
                  Maintain regular veterinary care including all recommended
                  vaccinations, examinations, and preventative treatments. Irish
                  Wolfhounds require thoughtful exercise and mental stimulation -
                  providing these is essential for their overall health and
                  well-being.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors duration-300 border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center mr-3">
                    3
                  </div>
                  <h3 className="font-semibold text-gray-800">
                    Proper Nutrition
                  </h3>
                </div>
                <p className="text-gray-700">
                  Feed your Irish Wolfhound high-quality food appropriate for
                  their age, size, and activity level. Maintain a healthy weight
                  as excess weight can lead to numerous health issues in this
                  giant breed.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors duration-300 border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center mr-3">
                    4
                  </div>
                  <h3 className="font-semibold text-gray-800">Documentation</h3>
                </div>
                <p className="text-gray-700">
                  Keep detailed records of all veterinary visits, vaccinations,
                  and treatments. In the event of a health concern, proper
                  documentation will be necessary to process any claims under
                  our guarantee.
                </p>
              </div>
            </div>

            <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-200">
              <div className="flex items-start">
                <AlertCircle className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0 mt-1" />
                <p className="text-emerald-800">
                  <strong>Important:</strong> While we deworm and vaccinate your
                  Irish Wolfhound until the departure date, we'd like you to
                  continue proper deworming and conducting regular check-ups as
                  recommended by your veterinarian. Failure to provide proper
                  care may void aspects of this health guarantee.
                </p>
              </div>
            </div>
          </section>

          {/* Exceptions Section */}
          <section className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            <div className="flex items-center mb-6">
              <AlertCircle className="w-6 h-6 text-emerald-500 mr-3" />
              <h2 className="text-3xl font-bold text-gray-800">
                Limitations of Our Guarantee
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              While we stand behind the health of our Irish Wolfhounds, there
              are certain aspects that fall outside the scope of our guarantee:
            </p>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-8">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Not Covered:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">
                    Temperament or behavioral issues that develop due to lack of
                    proper training or socialization
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">
                    Minor variations in size, weight, color, or markings from
                    what was expected
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">
                    Injuries or conditions resulting from accidents, neglect, or
                    improper care
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">
                    Parasitic conditions (internal or external) that develop
                    after the puppy leaves our care
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">
                    Costs associated with spaying or neutering, including
                    undescended testicles
                  </span>
                </li>
              </ul>
            </div>

            <p className="text-gray-700 leading-relaxed">
              This guarantee becomes void if the dog has not received proper
              veterinary care, appropriate nutrition, or has been bred without
              our prior knowledge and consent. Additionally, any physical injury
              or illness resulting from strenuous exercise without supervision,
              unsafe jumping, or any other preventable activity is not covered
              under this guarantee.
            </p>
          </section>

          {/* Contact CTA */}
          <div className="bg-gradient-to-r from-emerald-700 to-emerald-600 rounded-xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">
              Have Questions About Our Health Guarantee?
            </h3>
            <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
              We're committed to transparency and want you to feel confident in
              your decision to welcome one of our Irish Wolfhound puppies into
              your home. If you have any questions about our health guarantee,
              please don't hesitate to contact us.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-emerald-700 px-8 py-3 rounded-full font-semibold hover:bg-emerald-50 transition-colors shadow-md"
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

export default GuaranteePage;
