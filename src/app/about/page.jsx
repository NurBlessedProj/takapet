"use client";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import Footer from "@/components/Footer.jsx/page";
import {
  Heart,
  Shield,
  Award,
  Users,
  CheckCircle,
  Clock,
  ChevronDown,
  Zap,
  Brain,
  Medal,
  Smile,
  MapPin,
  Calendar,
  Lightbulb,
  Target,
} from "lucide-react";
import Image from "next/image";

function AboutPage() {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight * 0.9,
      behavior: "smooth",
    });
  };

  const features = [
    {
      icon: <Heart className="w-10 h-10 text-emerald-500" />,
      title: "Passionate Care",
      description:
        "Every Irish Wolfhound in our program receives dedicated attention and love from experienced handlers.",
    },
    {
      icon: <Shield className="w-10 h-10 text-emerald-500" />,
      title: "Health Guaranteed",
      description:
        "Comprehensive health screenings and genetic testing for all our Irish Wolfhounds.",
    },
    {
      icon: <Medal className="w-10 h-10 text-emerald-500" />,
      title: "Champion Bloodlines",
      description:
        "Our breeding program maintains the highest standards of Irish Wolfhound heritage and breed excellence.",
    },
    {
      icon: <Users className="w-10 h-10 text-emerald-500" />,
      title: "Family Support",
      description:
        "Lifetime guidance and support for all families who adopt our Irish Wolfhounds.",
    },
  ];

  const timeline = [
    {
      year: "2009",
      title: "Our Beginning",
      description:
        "Founded our Irish Wolfhound breeding program with a focus on temperament and health.",
    },
    {
      year: "2012",
      title: "Expanded Services",
      description:
        "Introduced comprehensive socialization programs and expanded our breeding facilities.",
    },
    {
      year: "2015",
      title: "National Recognition",
      description:
        "Received recognition for our breeding standards and healthy Irish Wolfhound lines.",
    },
    {
      year: "2020",
      title: "Global Reach",
      description:
        "Began serving families internationally, bringing joy to homes across the world.",
    },
    {
      year: "Today",
      title: "Continued Excellence",
      description:
        "Continuing our mission to breed the healthiest, most well-tempered Irish Wolfhounds.",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <Navbar />

      {/* Custom Banner */}
      <div className="relative h-[80vh] w-full overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/cover_tk.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 to-emerald-700/70" />
        </div>

        {/* Banner Content */}
        <div className="relative h-full flex flex-col justify-center items-center text-white px-4">
          <div className="text-center max-w-4xl mx-auto">
            {/* Animated Line */}
            <div className="w-20 h-1 bg-emerald-400 mx-auto mb-8 animate-pulse" />

            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              About Tariq’s Irish Wolfhound Puppies
            </h1>

            {/* Subtitle with gradient text */}
            <div className="mb-8">
              <span className="text-xl md:text-2xl font-light text-emerald-200">
                Raising noble, gentle Wolfhounds with heart and heritage since 2009
              </span>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-300">15+</div>
                <div className="text-sm uppercase tracking-wider mt-1">
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-300">500+</div>
                <div className="text-sm uppercase tracking-wider mt-1">
                  Happy Families
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-300">100%</div>
                <div className="text-sm uppercase tracking-wider mt-1">
                  Satisfaction
                </div>
              </div>
            </div>

            {/* Scroll Down Button */}
            <button
              onClick={scrollToContent}
              className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center 
                text-white/80 hover:text-white transition-colors duration-300"
            >
              <span className="text-sm uppercase tracking-wider mb-2">
                Discover Our Story
              </span>
              <ChevronDown className="w-6 h-6 animate-bounce" />
            </button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-emerald-50 to-transparent" />
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-emerald-900/50 to-transparent" />
      </div>

      {/* Rest of the content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Introduction */}
        <div className="text-center mb-16">
          <span className="text-emerald-600 font-medium">WHO WE ARE</span>
          <h2 className="text-3xl font-bold mt-2 text-gray-800">
            Our Breeding Philosophy
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mt-4 mb-8"></div>
          <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
            At the heart of our breeding program is a deep love for the Irish
            Wolfhound — a breed renowned for courage, grace, and soulful loyalty.
            We are dedicated to producing puppies with exceptional temperament,
            intelligence, and health. Our Wolfhounds are raised as gentle giants
            who thrive as family companions, therapy partners, and show prospects.
            We prioritize genetic health, early socialization, and preserving the
            noble spirit of this legendary breed.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="bg-emerald-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Our Story Section */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src="/image-im/WhatsApp%20Image%202025-11-03%20at%2021.00.36_e5cccf2b.jpg"
                    alt="Irish Wolfhound"
                    fill
                    className="object-cover"
                  />
              </div>
            </div>
            <div className="md:w-1/2">
              <span className="text-emerald-600 font-medium">OUR STORY</span>
              <h2 className="text-3xl font-bold mt-2 mb-6 text-gray-800">
                A Legacy of Excellence
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our journey began in 2009 with a passion for Irish Wolfhounds
                and a vision to raise hounds that exemplify the best qualities
                of this remarkable breed. What started as a small family
                operation has grown into a respected breeding program known for
                producing Irish Wolfhounds with exceptional temperament,
                intelligence, and health.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Over the years, we've refined our breeding practices, expanded
                our knowledge, and built relationships with veterinarians,
                behaviorists, and other experts to ensure we're providing the
                best possible start for our puppies. Our commitment to
                excellence has never wavered, and we continue to dedicate
                ourselves to preserving and enhancing the Irish Wolfhound breed.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <div className="bg-emerald-50 px-6 py-3 rounded-full flex items-center">
                  <Heart className="w-5 h-5 text-emerald-500 mr-2" />
                  <span className="text-gray-800 font-medium">
                    Gentle Giants
                  </span>
                </div>
                <div className="bg-emerald-50 px-6 py-3 rounded-full flex items-center">
                  <Brain className="w-5 h-5 text-emerald-500 mr-2" />
                  <span className="text-gray-800 font-medium">Intelligent</span>
                </div>
                <div className="bg-emerald-50 px-6 py-3 rounded-full flex items-center">
                  <Smile className="w-5 h-5 text-emerald-500 mr-2" />
                  <span className="text-gray-800 font-medium">Devoted Companion</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-emerald-600 font-medium">OUR JOURNEY</span>
            <h2 className="text-3xl font-bold mt-2 text-gray-800">
              Our Breeding Timeline
            </h2>
            <div className="w-24 h-1 bg-emerald-500 mx-auto mt-4"></div>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-emerald-200"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className="relative">
                  <div
                    className={`flex items-center justify-${
                      index % 2 === 0 ? "start" : "end"
                    } md:justify-${
                      index % 2 === 0 ? "end" : "start"
                    } md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-12" : "md:pl-12 md:ml-auto"
                    }`}
                  >
                    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 w-full">
                      <div className="flex items-center mb-3">
                        <Calendar className="w-5 h-5 text-emerald-500 mr-2" />
                        <span className="text-emerald-600 font-semibold">
                          {item.year}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>

                  {/* Circle marker */}
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-emerald-500 border-4 border-white"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <Target className="w-6 h-6 text-emerald-500 mr-3" />
                <h2 className="text-3xl font-bold text-gray-800">
                  Our Commitment
                </h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">
                    Expert guidance throughout your Irish Wolfhound journey, from
                    selection to lifelong care
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">
                    Comprehensive health testing and genetic screening for all
                    our Irish Wolfhounds
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">
                    Early socialization and environmental enrichment for
                    well-adjusted puppies
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">
                    Ongoing support and resources for training, nutrition, and
                    healthcare needs
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-700 to-emerald-600 text-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <Lightbulb className="w-6 h-6 text-emerald-300 mr-3" />
                <h2 className="text-3xl font-bold">Why Choose Us?</h2>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center gap-4">
                  <Clock className="w-6 h-6 text-emerald-300" />
                  <span>15+ years of specialized breeding experience</span>
                </li>
                <li className="flex items-center gap-4">
                  <Users className="w-6 h-6 text-emerald-300" />
                  <span>500+ happy families served worldwide</span>
                </li>
                <li className="flex items-center gap-4">
                  <Heart className="w-6 h-6 text-emerald-300" />
                  <span>Lifetime support and guidance guarantee</span>
                </li>
                <li className="flex items-center gap-4">
                  <Award className="w-6 h-6 text-emerald-300" />
                  <span>Recognition for breeding excellence</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-r from-amber-50 to-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Our Process
              </h2>
              <div className="space-y-8">
                <div className="border-l-4 border-amber-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Initial Consultation
                  </h3>
                  <p className="text-gray-600">
                    We begin with a thorough discussion of your lifestyle,
                    expectations, and what you're looking for in a Irish Wolfhound
                    companion. This helps us understand your needs and ensures a
                    good match.
                  </p>
                </div>
                <div className="border-l-4 border-amber-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Perfect Match
                  </h3>
                  <p className="text-gray-600">
                    Our experienced team helps match you with the ideal Irish
                    Wolfhound based on temperament, energy level, and your
                    specific needs. We consider factors like activity level,
                    family composition, and living situation.
                  </p>
                </div>
                <div className="border-l-4 border-amber-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Preparation
                  </h3>
                  <p className="text-gray-600">
                    Before your puppy comes home, we provide comprehensive
                    guidance on preparing your home, purchasing supplies, and
                    setting up for success. This includes training tips and
                    socialization strategies tailored to giant breeds.
                  </p>
                </div>
                <div className="border-l-4 border-amber-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Ongoing Support
                  </h3>
                  <p className="text-gray-600">
                    We provide continuous guidance and support throughout your
                    journey with your Irish Wolfhound, ensuring a successful
                    transition and happy life together. Our door is always open
                    for questions and advice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-emerald-700 to-emerald-600 text-white py-16 mt-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Irish Wolfhound Journey?
          </h2>
          <p className="text-xl mb-8 text-emerald-100">
            Let us help you find your perfect gentle giant companion
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-emerald-700 px-8 py-3 rounded-full font-semibold 
            hover:bg-emerald-50 transition-colors duration-300 shadow-md"
          >
            Contact Us Today
          </a>
        </div>
      </div>

      <Footer />
    </section>
  );
}

export default AboutPage;
