"use client";

import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Search,
  Filter,
  Loader2,
  Heart,
  Award,
  Zap,
  Target,
  Brain,
  PawPrint,
} from "lucide-react";
import Banner from "@/components/Banner/Banner";
import Navbar from "@/components/Navbar/Navbar";
import ShipmentContext from "@/contexts/ShipmentContext";
import Footer from "@/components/Footer.jsx/page";

function IrishWolfhoundPuppiesPage() {
  const [selected, setSelected] = useContext(ShipmentContext);
  const router = useRouter();
  const [puppies, setPuppies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    status: "all",
    gender: "all",
    coatType: "all",
    ageGroup: "all",
  });

  const getPuppies = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/post`);
      const data = await response.json();
      setPuppies(data);
    } catch (error) {
      console.error("Error fetching Irish Wolfhounds:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPuppies();
  }, []);

  // Use only real data from the database
  const displayPuppies = puppies;

  const filteredPuppies = displayPuppies.filter((puppy) => {
    const matchesSearch =
      puppy.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (puppy.description &&
        puppy.description.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesStatus =
      filters.status === "all" ||
      (puppy.status && puppy.status.toLowerCase() === filters.status);

    const matchesGender =
      filters.gender === "all" ||
      (puppy.sex && puppy.sex.toLowerCase() === filters.gender);

    const matchesCoat =
      filters.coatType === "all" ||
      (puppy.breed &&
        puppy.breed.toLowerCase().includes(filters.coatType.toLowerCase()));

    const matchesAge =
      filters.ageGroup === "all" ||
      (puppy.age && getAgeGroup(puppy.age) === filters.ageGroup);

    return (
      matchesSearch &&
      matchesStatus &&
      matchesGender &&
      matchesCoat &&
      matchesAge
    );
  });

  const getAgeGroup = (age) => {
    if (!age) return "unknown";

    if (age.includes("month")) {
      const months = parseInt(age);
      if (months <= 6) return "puppy";
      return "young";
    }

    if (age.includes("year")) {
      const years = parseInt(age);
      if (years < 3) return "young";
      if (years < 7) return "adult";
      return "senior";
    }

    const ageNum = parseInt(age);
    if (ageNum < 1) return "puppy";
    if (ageNum < 3) return "young";
    if (ageNum < 7) return "adult";
    return "senior";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-emerald-800 to-emerald-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <span className="text-emerald-300 uppercase tracking-wider font-semibold">
                Find Your Perfect Match
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 mt-2">
                Irish Wolfhound Puppies
              </h1>
              <p className="text-xl mb-6">
                Majestic companions bred for loyalty, grace, and gentle family
                temperament.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 p-2 rounded-full">
                    <Heart className="w-6 h-6 text-emerald-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Gentle Giants</h3>
                    <p className="text-emerald-100">Towering yet tender-hearted</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 p-2 rounded-full">
                    <Brain className="w-6 h-6 text-emerald-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Intelligent</h3>
                    <p className="text-emerald-100">Eager to learn and please</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 p-2 rounded-full">
                    <PawPrint className="w-6 h-6 text-emerald-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Loyalty</h3>
                    <p className="text-emerald-100">Devoted to their people</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/image-im/WhatsApp%20Image%202025-11-03%20at%2021.00.36_31baf88a.jpg"
                alt="Irish Wolfhound puppy"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-12 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Find Your Perfect Irish Wolfhound Puppy
          </h2>
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search Irish Wolfhound puppies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
            </div>

            <div className="flex flex-wrap gap-4 w-full md:w-auto">
              <select
                value={filters.status}
                onChange={(e) =>
                  setFilters({ ...filters, status: e.target.value })
                }
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 flex-grow md:flex-grow-0"
              >
                <option value="all">All Status</option>
                <option value="available">Available</option>
                <option value="reserved">Reserved</option>
                <option value="sold">Sold</option>
              </select>

              <select
                value={filters.gender}
                onChange={(e) =>
                  setFilters({ ...filters, gender: e.target.value })
                }
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 flex-grow md:flex-grow-0"
              >
                <option value="all">All Genders</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>

              <select
                value={filters.coatType}
                onChange={(e) =>
                  setFilters({ ...filters, coatType: e.target.value })
                }
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 flex-grow md:flex-grow-0"
              >
                <option value="all">All Coat Shades</option>
                <option value="gray">Gray</option>
                <option value="brindle">Brindle</option>
                <option value="fawn">Fawn</option>
                <option value="black">Black</option>
                <option value="white">White</option>
              </select>
            </div>
          </div>
        </div>

        {/* Cat Cards Grid */}
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <Loader2 className="w-12 h-12 animate-spin text-emerald-500" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPuppies.map((puppy, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl border border-gray-100"
              >
                <div className="relative h-80">
                  <img
                    src={puppy.image}
                    alt={puppy.name}
                    fill
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        puppy.status && puppy.status.toLowerCase() === "available"
                          ? "bg-green-500 text-white"
                          : puppy.status &&
                            puppy.status.toLowerCase() === "reserved"
                          ? "bg-emerald-500 text-white"
                          : "bg-red-500 text-white"
                      }`}
                    >
                      {puppy.status}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h2 className="text-3xl font-bold text-white mb-2">
                      {puppy.name}
                    </h2>
                    <div className="flex gap-2">
                      
                      <span className="px-3 py-1 rounded-full bg-white/30 text-white text-sm font-medium backdrop-blur-sm">
                        ${puppy.price}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-emerald-50 p-3 rounded-lg">
                      <span className="text-sm text-emerald-700">Age</span>
                      <p className="font-semibold text-gray-800">{puppy.age}</p>
                    </div>
                    <div className="bg-emerald-50 p-3 rounded-lg">
                      <span className="text-sm text-emerald-700">Gender</span>
                      <p className="font-semibold text-gray-800">{puppy.sex}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">
                      About {puppy.name}
                    </h3>
                    <p className="text-gray-600">
                      {puppy.description && puppy.description.length > 80
                        ? `${puppy.description.slice(0, 80)}...`
                        : puppy.description}
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      if (
                        puppy.status &&
                        puppy.status.toLowerCase() === "available"
                      ) {
                        router.push("/orders");
                        setSelected(puppy);
                      }
                    }}
                    disabled={
                      !puppy.status || puppy.status.toLowerCase() !== "available"
                    }
                    className={`w-full py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                      puppy.status && puppy.status.toLowerCase() === "available"
                        ? "bg-emerald-600 text-white hover:bg-emerald-700"
                        : "bg-gray-200 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    {puppy.status && puppy.status.toLowerCase() === "available"
                      ? `Adopt ${puppy.name}`
                      : "Currently Unavailable"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {!isLoading && filteredPuppies.length === 0 && (
          <div className="text-center py-16 bg-white rounded-xl shadow-md">
            <div className="bg-emerald-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-emerald-500" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800">
              No Irish Wolfhound puppies available matching your criteria
            </h3>
            <p className="text-gray-600 mt-2 max-w-md mx-auto">
              Please adjust your filters or check back soon. We regularly update
              our available puppies.
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setFilters({
                  status: "all",
                  gender: "all",
                  coatType: "all",
                  ageGroup: "all",
                });
              }}
              className="mt-6 px-6 py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>

      {/* Adoption Process Section */}
      <section className="bg-emerald-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-emerald-600 font-medium">HOW IT WORKS</span>
            <h2 className="text-3xl font-bold mt-2 text-gray-800">
              Our Adoption Process
            </h2>
            <div className="w-24 h-1 bg-emerald-500 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-emerald-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Choose Your Puppy</h3>
              <p className="text-gray-600">
                Browse our Irish Wolfhound puppies and fall in love with the
                companion that fits your family.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-emerald-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Complete Application
              </h3>
              <p className="text-gray-600">
                Fill out our adoption form so we can ensure a wonderful match
                between puppy and family.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-emerald-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Welcome Home</h3>
              <p className="text-gray-600">
                Arrange pickup or delivery of your new Irish Wolfhound family
                member and begin your adventure together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <span className="text-emerald-600 font-medium">COMMON QUESTIONS</span>
          <h2 className="text-3xl font-bold mt-2 text-gray-800">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-3">
              Are Irish Wolfhounds good with children?
            </h3>
            <p className="text-gray-600">
              Irish Wolfhounds are famously gentle with kids. Their calm,
              patient nature makes them wonderful companions for families of all
              sizes.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-3">
              How much exercise do they need?
            </h3>
            <p className="text-gray-600">
              These hounds enjoy daily walks and secure playtime to stretch
              their long legs, but indoors they are relaxed couch companions.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-3">
              Do you offer delivery or transport?
            </h3>
            <p className="text-gray-600">
              Yes, we coordinate safe ground or flight nanny transport for our
              puppies. Visit the shipping page for details on routes, timing,
              and pricing.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-3">
              What health guarantees do you offer?
            </h3>
            <p className="text-gray-600">
              Every Irish Wolfhound puppy leaves us with veterinary health
              certificates, age-appropriate vaccinations, deworming, and a
              congenital health guarantee.
            </p>
          </div>
        </div>

        <div className="text-center mt-10">
          <a
            href="/faq"
            className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700"
          >
            View all FAQs
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default IrishWolfhoundPuppiesPage;
