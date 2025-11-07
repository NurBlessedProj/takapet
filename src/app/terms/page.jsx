"use client";
import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer.jsx/page";
import {
  ScrollText,
  FileCheck,
  AlertCircle,
  Scale,
  Shield,
  DollarSign,
  Clock,
  CheckCircle,
  Calendar,
  ArrowRight,
  HelpCircle,
  Printer,
} from "lucide-react";

const TermsPage = () => {
  const sections = [
    {
      icon: <FileCheck className="w-6 h-6 text-emerald-500" />,
      title: "Acceptance of Terms",
      content: `By accessing and using our website (tariqsirishwolfhounds.com), you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our website or services.

      These terms may be modified at any time, and continued use of our services constitutes acceptance of any modifications.`,
    },
    {
      icon: <Scale className="w-6 h-6 text-emerald-500" />,
      title: "Purchase and Adoption Terms",
      content: `1. Puppy Reservations:
      • A non-refundable deposit is required to reserve an Irish Wolfhound puppy
      • Deposits are applied to the final purchase price
      • Reservation priority is based on deposit receipt date

      2. Health Guarantees:
      • All puppies come with a comprehensive health guarantee
      • Initial veterinary examination must be completed within 72 hours
      • Genetic health guarantees as specified in individual contracts

      3. Payment Terms:
      • Full payment must be received before puppy pickup or delivery
      • Accepted payment methods will be specified
      • Payment plans must be agreed upon in writing`,
    },
    {
      icon: <AlertCircle className="w-6 h-6 text-emerald-500" />,
      title: "Responsibilities and Obligations",
      content: `Buyer Responsibilities:
      • Provide appropriate care and living conditions for your Irish Wolfhound
      • Maintain regular veterinary care and vaccinations
      • Follow provided care instructions for proper nutrition and exercise
      • Notify us of any health issues within guarantee period

      Our Responsibilities:
      • Provide healthy, well-socialized Irish Wolfhound puppies
      • Deliver complete health records and vaccination history
      • Offer ongoing support and guidance for the life of your cat
      • Honor all contractual guarantees as specified`,
    },
    {
      icon: <DollarSign className="w-6 h-6 text-emerald-500" />,
      title: "Refund and Return Policy",
      content: `1. Deposit Refunds:
      • Deposits are generally non-refundable
      • Exceptions may be made in specific circumstances
      • Transfer to future litters may be possible

      2. Health-Related Returns:
      • Must be documented by a licensed veterinarian
      • Time limits apply as specified in contract
      • Replacement or refund options as per agreement

      3. General Returns:
      • Each case evaluated individually
      • Transportation costs are buyer's responsibility
      • Original health certificates required`,
    },
    {
      icon: <Shield className="w-6 h-6 text-emerald-500" />,
      title: "Website Usage",
      content: `1. Intellectual Property:
      • All content is protected by copyright
      • Photos and descriptions are our property
      • No reproduction without permission

      2. User Conduct:
      • No harmful or malicious activity
      • Accurate information must be provided
      • Respect for other users and our staff

      3. Privacy:
      • User data protected per Privacy Policy
      • Cookies and tracking detailed separately
      • Communication preferences respected`,
    },
    {
      icon: <Clock className="w-6 h-6 text-emerald-500" />,
      title: "Timeline and Communication",
      content: `1. Response Times:
      • Inquiries answered within 48 hours
      • Updates provided weekly for reserved puppies
      • Emergency contact available for urgent issues

      2. Pickup and Delivery:
      • Scheduling must be confirmed in advance
      • Specific time windows will be provided
      • Delays must be communicated promptly

      3. Follow-up Communication:
      • Regular updates requested for puppy progress
      • Annual health check documentation
      • Newsletter subscription optional`,
    },
  ];

  const quickLinks = [
    { title: "Contact Us", url: "/contact" },
    { title: "Privacy Policy", url: "/privacy" },
    { title: "FAQ", url: "/faq" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
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
          <div className="bg-emerald-500/30 backdrop-blur-sm p-4 rounded-full border border-emerald-400/30 mb-6">
            <ScrollText className="w-16 h-16 text-emerald-100" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
            Terms & Conditions
          </h1>
          <p className="text-xl text-center text-emerald-100 max-w-3xl">
            Please read these terms carefully before proceeding
          </p>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 mb-8">
                <div className="flex items-center mb-4">
                  <Calendar className="w-5 h-5 text-emerald-500 mr-2" />
                  <h3 className="font-semibold text-gray-800">Last Updated</h3>
                </div>
                <p className="text-gray-700">December 11, 2024</p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <a
                    href="#"
                    className="inline-flex items-center text-emerald-600 hover:text-emerald-700 transition-colors text-sm"
                    onClick={(e) => {
                      e.preventDefault();
                      window.print();
                    }}
                  >
                    <Printer className="w-4 h-4 mr-2" />
                    Print these terms
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                <h3 className="font-semibold text-lg text-gray-800 mb-4">
                  Quick Links
                </h3>
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.url}
                        className="flex items-center text-emerald-600 hover:text-emerald-700 transition-colors"
                      >
                        <ArrowRight className="w-4 h-4 mr-2" />
                        <span>{link.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-r from-emerald-50 to-white p-6 rounded-xl border border-emerald-100 mt-8">
                <div className="flex items-start">
                  <HelpCircle className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Have Questions?
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Our team is available to clarify any terms or conditions
                      regarding our Irish Wolfhound puppies.
                    </p>
                    <a
                      href="/contact"
                      className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-700 transition-colors"
                    >
                      Contact us
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Introduction */}
            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100 mb-8">
              <div className="flex items-center mb-6">
                <div className="bg-emerald-50 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <ScrollText className="w-6 h-6 text-emerald-500" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Introduction
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                These Terms and Conditions govern your use of our website and
                services provided by Tariq's Irish Wolfhound Puppies. By accessing our
                website or utilizing our services, you agree to comply with and
                be bound by these terms. Please read them carefully before
                proceeding with any purchase or adoption process related to our
                Irish Wolfhounds.
              </p>
              <div className="mt-6 bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700">
                    By continuing to use our website or services, you
                    acknowledge that you have read, understood, and agree to be
                    bound by all terms and conditions outlined in this document.
                  </p>
                </div>
              </div>
            </div>

            {/* Policy Sections */}
            <div className="space-y-6">
              {sections.map((section, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md p-8 border border-gray-100"
                >
                  <div className="flex items-center mb-6">
                    <div className="bg-emerald-50 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      {section.icon}
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-800">
                      {section.title}
                    </h2>
                  </div>
                  <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {section.content}
                  </div>
                </div>
              ))}
            </div>

            {/* Legal Notice */}
            <div className="bg-gray-50 rounded-xl p-8 text-gray-600 mt-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Legal Notice
              </h3>
              <p className="mb-4">
                This document was last updated on December 11, 2024. We reserve
                the right to modify these terms at any time without prior
                notice. Changes will be effective immediately upon posting on
                our website.
              </p>
              <p>
                For questions about these terms, please contact us through our
                designated channels. Tariq's Irish Wolfhound Puppies reserves all rights not
                expressly granted in these Terms and Conditions.
              </p>
            </div>

            {/* Acceptance Section */}
            <div className="bg-gradient-to-r from-emerald-700 to-emerald-600 text-white rounded-xl shadow-md p-8 mt-6">
              <h2 className="text-2xl font-semibold mb-4">Your Acceptance</h2>
              <p className="leading-relaxed mb-6">
                By using our website, services, or proceeding with a puppy
                purchase or reservation, you acknowledge that you have read,
                understood, and agree to be bound by these Terms and Conditions.
              </p>
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 text-emerald-200 mr-3" />
                <span className="text-emerald-100">
                  Thank you for choosing Tariq's Irish Wolfhound Puppies
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-r from-emerald-700 to-emerald-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Questions About Our Terms?
          </h2>
          <p className="text-xl mb-8 text-emerald-100">
            If you have any questions about our terms and conditions, our team
            is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block bg-white text-emerald-700 px-8 py-3 rounded-full font-semibold hover:bg-emerald-50 transition-colors duration-300"
            >
              Contact Us
            </a>
            <a
              href="/faq"
              className="inline-block bg-transparent border border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-emerald-600 transition-colors duration-300"
            >
              View FAQs
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TermsPage;
