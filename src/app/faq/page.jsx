"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer.jsx/page";
import {
  ChevronDown,
  ChevronUp,
  Search,
  HelpCircle,
  MessageSquare,
  ArrowRight,
  Filter,
} from "lucide-react";
import Image from "next/image";

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Questions" },
    { id: "breed", name: "Breed Information" },
    { id: "health", name: "Health & Care" },
    { id: "training", name: "Training & Behavior" },
    { id: "puppies", name: "Puppies & Adoption" },
  ];

  const faqs = [
    {
      question: "What makes Irish Wolfhounds unique?",
      answer:
        "Irish Wolfhounds are the tallest of all dog breeds and are famous for their calm, noble nature. Bred historically as coursing hounds, they are gentle giants who thrive on human companionship, making them wonderful family guardians with an affectionate soul.",
      category: "breed",
    },
    {
      question: "How large do Irish Wolfhounds grow?",
      answer:
        "Adult males often stand 32-35 inches at the shoulder and weigh 120-160 pounds, while females are slightly smaller. They continue maturing until around two years of age and reach full emotional maturity by three.",
      category: "breed",
    },
    {
      question: "What is the life expectancy of an Irish Wolfhound?",
      answer:
        "Irish Wolfhounds typically live 7-10 years. Responsible breeding, high-quality nutrition, and routine veterinary care can help them stay active and comfortable throughout their senior years.",
      category: "health",
    },
    {
      question: "Do Irish Wolfhounds need extensive grooming?",
      answer:
        "Their rough, wiry coat benefits from weekly brushing and occasional hand-stripping to remove dead hair. Regular nail trimming, ear checks, and dental care keep them looking and feeling their best.",
      category: "health",
    },
    {
      question: "Are Irish Wolfhounds good with children and other pets?",
      answer:
        "Yes. Wolfhounds are famously patient and gentle. They typically coexist peacefully with children and other animals when properly socialized, though supervision is always recommended around very small children due to their size.",
      category: "training",
    },
    {
      question: "How much exercise do Irish Wolfhounds need?",
      answer:
        "Wolfhounds enjoy daily walks, secure off-leash sprints, and relaxed indoor time. Moderate, consistent exercise protects their joints and keeps their minds engaged without overexerting growing puppies.",
      category: "training",
    },
    {
      question: "What health screenings should Irish Wolfhounds have?",
      answer:
        "Responsible breeders screen breeding stock for hip dysplasia, cardiac conditions, and eye issues. We share all veterinary reports with adoptive families and encourage annual checkups with a giant-breed-savvy veterinarian.",
      category: "health",
    },
    {
      question: "What kind of home suits an Irish Wolfhound?",
      answer:
        "They thrive in calm homes with secure outdoor space where they can stretch their legs. Wolfhounds prefer being close to their family and do best when they are part of daily routines rather than left alone for long periods.",
      category: "breed",
    },
    {
      question: "Are Irish Wolfhounds easy to train?",
      answer:
        "They are eager to please but sensitive. Positive, gentle training builds trust. Short sessions focusing on recall, loose-leash skills, and polite manners yield the best results for these thoughtful hounds.",
      category: "training",
    },
    {
      question: "What should I expect when adopting an Irish Wolfhound puppy?",
      answer:
        "We carefully match puppies with families based on temperament, household activity, and experience with giant breeds. Each puppy leaves with veterinary records, feeding instructions, and lifetime breeder support.",
      category: "puppies",
    },
    {
      question: "What do Irish Wolfhounds eat?",
      answer:
        "Puppies thrive on large-breed, slow-growth formulas that support healthy joints. Adults do well on balanced, high-quality diets divided into two meals daily. We provide individualized feeding plans for every puppy.",
      category: "health",
    },
    {
      question: "How do I prepare my home for a Wolfhound puppy?",
      answer:
        "Create a safe space with non-slip rugs, raised feeders, and sturdy crates sized for giant breeds. Remove hazards at nose level, secure trash cans, and have enrichment toys ready to keep curious pups occupied.",
      category: "puppies",
    },
    {
      question: "Do Irish Wolfhounds bark a lot?",
      answer:
        "Wolfhounds are generally quiet. They may alert bark if something feels off, but they are not chronic barkers. Proper socialization and clear routines help reinforce calm behavior.",
      category: "training",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqs = faqs.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      activeCategory === "all" || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

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
          <span className="text-emerald-300 uppercase tracking-wider font-semibold mb-2">
            Knowledge Center
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-center text-emerald-100 max-w-3xl">
            Everything you need to know about Irish Wolfhounds
          </p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="bg-white shadow-md py-6">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search questions..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Filter className="w-4 h-4" />
              <span>Filter:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category.id
                      ? "bg-emerald-500 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-5xl mx-auto px-4 py-16">
        {filteredFaqs.length > 0 ? (
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
              >
                <button
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-emerald-50 transition-colors"
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="flex items-center">
                    <HelpCircle
                      className={`w-5 h-5 mr-3 ${
                        openIndex === index
                          ? "text-emerald-500"
                          : "text-emerald-400"
                      }`}
                    />
                    <span className="font-semibold text-lg text-gray-800">
                      {faq.question}
                    </span>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                      openIndex === index ? "bg-emerald-100" : "bg-gray-100"
                    }`}
                  >
                    {openIndex === index ? (
                      <ChevronUp
                        className={`w-5 h-5 ${
                          openIndex === index
                            ? "text-emerald-500"
                            : "text-gray-500"
                        }`}
                      />
                    ) : (
                      <ChevronDown
                        className={`w-5 h-5 ${
                          openIndex === index
                            ? "text-emerald-500"
                            : "text-gray-500"
                        }`}
                      />
                    )}
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? "max-h-[800px]" : "max-h-0"
                  }`}
                >
                  <div className="px-6 py-5 border-t border-gray-100">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                    <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                      <span className="text-xs uppercase tracking-wider text-emerald-600 font-medium">
                        {categories.find((cat) => cat.id === faq.category)
                          ?.name || faq.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="bg-emerald-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-emerald-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              No results found
            </h3>
            <p className="text-gray-600 max-w-md mx-auto">
              We couldn't find any questions matching your search. Try different
              keywords or browse all categories.
            </p>
            <button
              className="mt-6 px-6 py-2 bg-emerald-100 text-emerald-700 font-medium rounded-full hover:bg-emerald-200 transition-colors"
              onClick={() => {
                setSearchTerm("");
                setActiveCategory("all");
              }}
            >
              Clear filters
            </button>
          </div>
        )}
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-r from-emerald-700 to-emerald-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Still Have Questions?
          </h2>
          <p className="text-xl mb-8 text-emerald-100">
            We're here to help! Contact us for more information about our Irish
            Wolfhound puppies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-emerald-700 px-8 py-3 rounded-full font-semibold hover:bg-emerald-50 transition-colors duration-300"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Contact Us
            </a>
            <a
              href="/about"
              className="inline-flex items-center justify-center bg-transparent text-white border border-white px-8 py-3 rounded-full font-semibold hover:bg-emerald-600 transition-colors duration-300"
            >
              Learn About Us
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FAQPage;
