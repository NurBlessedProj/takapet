"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer.jsx/page";
import { Mail, Send, Clock, HelpCircle, CheckCircle } from "lucide-react";
import Image from "next/image";

function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    address: "",
    message: "",
    interest: "general", // Default value
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const { error: message } = await response.json();
        throw new Error(message || "Failed to send message.");
      }

      setFormSubmitted(true);
      setFormData({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        address: "",
        message: "",
        interest: "general",
      });
    } catch (err) {
      console.error("Failed to send contact message:", err);
      setError(
        err.message ||
          "Failed to send message. Please try again or contact us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqs = [
    {
      question:
        "How old are your Irish Wolfhound puppies when they go to their new homes?",
      answer:
        "Our Irish Wolfhound puppies typically go to their new homes at 10-12 weeks of age. By this time, they've been weaned, received initial vaccinations, and experienced gentle socialization tailored to giant breeds.",
    },
    {
      question: "Do you offer shipping for your Irish Wolfhound puppies?",
      answer:
        "Yes, we can arrange delivery throughout the continental United States. We work with experienced pet transportation services to ensure a safe and comfortable journey for each puppy.",
    },
    {
      question: "What health guarantees do you offer?",
      answer:
        "We provide a comprehensive health guarantee that covers genetic conditions. All of our puppies come with up-to-date vaccinations, deworming, and a health certificate from our veterinarian.",
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
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
            Contact Us
          </h1>
          <p className="text-xl text-center text-emerald-100 max-w-3xl">
            We're here to answer your questions and help you find your perfect
            Irish Wolfhound companion.
          </p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-start space-x-4 border border-gray-100">
            <div className="bg-emerald-50 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
              <Mail className="w-6 h-6 text-emerald-500" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-800">Email</h3>
              <p className="text-gray-600">tariqsirishwolfhounds@gmail.com</p>
              <p className="text-sm text-gray-500 mt-2">
                We respond within 24-48 hours
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-start space-x-4 border border-gray-100">
            <div className="bg-emerald-50 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
              <Clock className="w-6 h-6 text-emerald-500" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-800">
                Business Hours
              </h3>
              <p className="text-gray-600">Monday - Friday: 9am - 6pm</p>
              <p className="text-gray-600">Saturday: 10am - 4pm</p>
              <p className="text-gray-600">Sunday: By appointment</p>
            </div>
            </div>
            </div>
        {/* Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="text-center mb-8">
              <span className="text-emerald-600 font-medium">REACH OUT</span>
              <h2 className="text-3xl font-bold mt-2 text-gray-800">
                Send us a Message
              </h2>
              <div className="w-24 h-1 bg-emerald-500 mx-auto mt-4 mb-4"></div>
              <p className="text-gray-600">
                Have questions about our Irish Wolfhounds? We're here to help!
              </p>
            </div>

            {formSubmitted ? (
              <div className="text-center py-8">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Thank You!
                </h3>
                <p className="text-gray-600 mb-6">
                  Your message has been sent successfully. We'll get back to you
                  shortly.
                </p>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({
                      firstName: "",
                      lastName: "",
                      phoneNumber: "",
                      email: "",
                      address: "",
                      message: "",
                      interest: "general",
                    });
                  }}
                  className="px-6 py-2 bg-amber-100 text-amber-700 font-medium rounded-full hover:bg-amber-200 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                    {error}
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      className="block text-sm font-medium text-gray-700 mb-2"
                      htmlFor="firstName"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-300"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-medium text-gray-700 mb-2"
                      htmlFor="lastName"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-300"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      className="block text-sm font-medium text-gray-700 mb-2"
                      htmlFor="phoneNumber"
                    >
                      Phone Number<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      required
                      value={formData.phoneNumber}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-300"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-medium text-gray-700 mb-2"
                      htmlFor="email"
                    >
                      Email<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-300"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-2"
                    htmlFor="address"
                  >
                    Address/State
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-300"
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-2"
                    htmlFor="interest"
                  >
                    I'm interested in:
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-300"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="puppy">Available Puppies</option>
                    <option value="waitlist">Joining the Waitlist</option>
                    <option value="health">Health Guarantees</option>
                    <option value="shipping">Shipping Information</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-2"
                    htmlFor="message"
                  >
                    Message/Comment<span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-300 resize-none"
                    onChange={handleChange}
                  />
                </div>

                <div className="text-center pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center px-8 py-3 bg-amber-600 text-white font-semibold rounded-full
                      hover:bg-amber-700 focus:ring-4 focus:ring-amber-300 transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* FAQ Section */}
          <div>
            <div className="text-center mb-8">
              <span className="text-amber-600 font-medium">
                COMMON QUESTIONS
              </span>
              <h2 className="text-3xl font-bold mt-2 text-gray-800">
                Frequently Asked Questions
              </h2>
              <div className="w-24 h-1 bg-amber-500 mx-auto mt-4 mb-4"></div>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
                >
                  <div className="flex items-start">
                    <div className="bg-emerald-50 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-4">
                      <HelpCircle className="w-4 h-4 text-emerald-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
      </div>
    </div>

      <Footer />
    </section>
  );
}

export default ContactPage;
