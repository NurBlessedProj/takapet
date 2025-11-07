import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  Heart,
  Shield,
  Zap,
  Brain,
  Star,
  Award,
  PawPrint,
  Quote,
  Target,
  Bone,
  Activity,
  Clock,
} from "lucide-react";

// Irish Wolfhound testimonial data
const testimonials = [
  {
    name: "Michael & Emma Roberts",
    text: "Our Irish Wolfhound, Finn, is the perfect blend of calm and playful. He towers over everyone yet is the gentlest soul in our home.",
    location: "Denver, Colorado",
  },
  {
    name: "Sarah Thompson",
    text: "We wanted a loyal guardian for our acreage and got so much more. Maeve is devoted to the kids and content to lounge by the fireplace after long walks.",
    location: "Portland, Oregon",
  },
  {
    name: "David & Lisa Wilson",
    text: "Tariq matched us with Ruairí, and he has been incredible with our children. His patience, intuition, and easygoing demeanor make him a dream companion.",
    location: "Austin, Texas",
  },
  {
    name: "Jennifer O'Connor",
    text: "As lifelong sighthound lovers, we are blown away by the confidence and grace of our Wolfhound, Siofra. She draws admirers everywhere we go.",
    location: "Seattle, Washington",
  },
];

function Content() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const totalSlides = isMobile
    ? testimonials.length
    : Math.max(0, testimonials.length - 2);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Irish Wolfhound gallery images
  const images = [
    "/image-im/irish_hound_1.jpg",
    "/image-im/WhatsApp%20Image%202025-11-03%20at%2021.00.33_b12636c8.jpg",
    "/image-im/WhatsApp%20Image%202025-11-03%20at%2021.00.34_953c1e6f.jpg",
    "/image-im/WhatsApp%20Image%202025-11-03%20at%2021.00.36_31baf88a.jpg",
  ];

  const features = [
    {
      icon: <Heart className="w-8 h-8 text-emerald-500" />,
      title: "Gentle Giants",
      description:
        "Towering hounds with unbelievably calm, affectionate personalities",
    },
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: "Highly Intelligent",
      description:
        "Smart, intuitive companions that respond to consistent, gentle training",
    },
    {
      icon: <PawPrint className="w-8 h-8 text-rose-500" />,
      title: "Family Focused",
      description:
        "Stay close to their people, thrive on companionship, and adapt to family life",
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: "Steady Guardians",
      description:
        "Patient, watchful, and protective without aggression — ideal gentle guardians",
    },
  ];

  const careGuides = [
    {
      icon: <Activity className="w-6 h-6 text-orange-600" />,
      title: "Daily Stretch",
      description:
        "Irish Wolfhounds love relaxed walks and space to stretch, followed by long naps",
    },
    {
      icon: <Bone className="w-6 h-6 text-emerald-600" />,
      title: "Coat & Skin",
      description:
        "Their rough coat benefits from weekly brushing and gentle grooming to minimize shedding",
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-600" />,
      title: "Structured Routine",
      description:
        "Early socialization and predictable routines help Wolfhounds stay confident and calm",
    },
  ];

  const breedAttributes = [
    { label: "Size", value: 98 },
    { label: "Intelligence", value: 85 },
    { label: "Family Loyalty", value: 95 },
    { label: "Gentle Temperament", value: 94 },
  ];

  return (
    <div className="w-full bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[80vh] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/cover_tk.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/70 to-emerald-700/60" />
        </div>
        <div className="relative h-full w-screen flex flex-col justify-center items-center text-white px-4">
          <span className="text-emerald-300 uppercase tracking-wider font-semibold mb-2">
            Noble Irish Guardians
          </span>
          <h1 className="text-4xl text-center md:text-6xl font-bold mb-6 drop-shadow-lg">
            Discover the Legend of
            <br className="hidden md:block" /> Irish Wolfhound Puppies
          </h1>
          <p className="text-xl text-center text-emerald-100 mb-10 max-w-2xl">
            Experience a rare combination of gentle temperament, imposing
            stature, and unwavering devotion — a true giant with a tender heart.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/available-puppies"
              className="inline-block bg-white text-emerald-900 font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-emerald-50 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              View Available Puppies
            </a>
            <a
              href="/contact"
              className="inline-block bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Quick Stats Section */}
      <div className="bg-white py-8 shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <p className="text-4xl font-bold text-emerald-600">30-35"</p>
              <p className="text-gray-600">Height at shoulder</p>
            </div>
            <div className="p-4">
              <p className="text-4xl font-bold text-emerald-600">105-140 lbs</p>
              <p className="text-gray-600">Weight</p>
            </div>
            <div className="p-4">
              <p className="text-4xl font-bold text-emerald-600">6-10 yrs</p>
              <p className="text-gray-600">Average lifespan</p>
            </div>
            <div className="p-4">
              <p className="text-4xl font-bold text-emerald-600">Ireland</p>
              <p className="text-gray-600">Country of origin</p>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <span className="text-emerald-600 font-medium">
            WHAT MAKES THEM SPECIAL
          </span>
          <h2 className="text-4xl font-bold mt-2 text-gray-800">
            Breed Characteristics
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-gray-100"
            >
              <div className="bg-emerald-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Main Content Section */}
      <section className="max-w-7xl mx-auto px-4 py-20 bg-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-emerald-600 font-medium">BREED HISTORY</span>
            <h2 className="text-3xl font-bold text-gray-800">
              The Irish Wolfhound Legacy
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Irish Wolfhounds are among the world's tallest dogs — historic
              coursing hounds celebrated for bravery and loyalty. Today, they
              are cherished as dignified, soft-natured companions who bond
              deeply with their families.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Raised in our home, each puppy experiences early neurological
              stimulation, gentle handling, and socialization so their giant
              frames are matched with steady hearts and confident minds. We
              prioritize health testing, conformation, and a temperament suited
              for modern family life.
            </p>
            <div className="pt-4">
              <a
                href="/about"
                className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700"
              >
                Learn more about our breeding program
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
          </div>
          <div className="relative h-[500px] rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="/image-im/WhatsApp%20Image%202025-11-03%20at%2021.00.34_2db26b7c.jpg"
              alt="Irish Wolfhound standing proudly"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Rating Bars */}
      <section className="bg-emerald-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-medium">
              BREED ATTRIBUTES
            </span>
            <h2 className="text-4xl font-bold mt-2 text-gray-800">
              Irish Wolfhound Ratings
            </h2>
            <div className="w-24 h-1 bg-emerald-500 mx-auto mt-4"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-16">
            {breedAttributes.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">
                    {item.label}
                  </span>
                  <span className="font-medium text-emerald-600">
                    {item.value}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-emerald-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${item.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-medium">OUR GALLERY</span>
            <h2 className="text-4xl font-bold mt-2 text-gray-800">
              Irish Wolfhounds in Action
            </h2>
            <div className="w-24 h-1 bg-emerald-500 mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {images.map((src, index) => (
              <div
                key={index}
                className="relative h-64 rounded-lg overflow-hidden shadow-md group"
              >
                <Image
                  src={src}
                  alt={`Irish Wolfhound ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="font-semibold">Irish Wolfhound</p>
                  <p className="text-sm text-gray-200">Graceful sighthound presence</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Care Guide Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <span className="text-emerald-600 font-medium">
            CARING FOR YOUR IRISH WOLFHOUND
          </span>
          <h2 className="text-4xl font-bold mt-2 text-gray-800">Care Guide</h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {careGuides.map((guide, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <div className="bg-emerald-50 p-4 rounded-full mr-4">
                  {guide.icon}
                </div>
                <h3 className="text-xl font-semibold">{guide.title}</h3>
              </div>
              <p className="text-gray-600">{guide.description}</p>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <a
                  href="/health"
                  className="text-emerald-600 font-medium hover:text-emerald-700 flex items-center"
                >
                  Learn more
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full bg-emerald-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-medium">TESTIMONIALS</span>
            <h2 className="text-4xl font-bold mt-2 text-gray-800">
              What Our Wolfhound Families Say
            </h2>
            <div className="w-24 h-1 bg-emerald-500 mx-auto mt-4"></div>
          </div>

          <div className="relative">
            {/* Carousel Container */}
            <div className="w-full overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out w-full"
                style={{
                  transform: `translateX(-${
                    currentSlide * (isMobile ? 100 : 33.33)
                  }%)`,
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="w-full md:w-1/3 flex-shrink-0 px-4"
                    style={{ minWidth: isMobile ? "100%" : "33.33%" }}
                  >
                    <div className="bg-white rounded-2xl shadow-lg p-8 h-full">
                      <Quote className="w-10 h-10 text-emerald-200 mb-6" />
                      <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                        "{testimonial.text}"
                      </p>
                      <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                        <div>
                          <p className="font-semibold text-emerald-900">
                            {testimonial.name}
                          </p>
                          <p className="text-sm text-gray-500">
                            {testimonial.location}
                          </p>
                        </div>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 text-emerald-400 fill-emerald-400"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 bg-white p-3 rounded-full shadow-lg hover:bg-emerald-50 z-10 transition-all duration-200 hover:scale-105"
              aria-label="Previous slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-emerald-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 bg-white p-3 rounded-full shadow-lg hover:bg-emerald-50 z-10 transition-all duration-200 hover:scale-105"
              aria-label="Next slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-emerald-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-3 mt-10">
              {[...Array(totalSlides)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    currentSlide === index
                      ? "bg-emerald-600 scale-125"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Standards Section */}
      <section className="bg-emerald-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-emerald-300 font-medium uppercase tracking-wider">
              Official Standards
            </span>
            <h2 className="text-4xl font-bold mt-2">Breed Standards</h2>
            <div className="w-24 h-1 bg-emerald-300 mx-auto mt-4"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-emerald-800 to-emerald-900 rounded-xl p-8 shadow-xl">
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <span className="bg-emerald-700 p-2 rounded-full mr-4">
                  <PawPrint className="w-6 h-6 text-emerald-300" />
                </span>
                Physical Traits
              </h3>
              <ul className="space-y-6">
                <li className="flex items-center">
                  <span className="w-4 h-4 bg-emerald-400 rounded-full mr-3"></span>
                  <div>
                    <span className="font-medium block">Height:</span>
                    <span className="text-emerald-100">
                      30-35 inches at the shoulder
                    </span>
                  </div>
                </li>
                <li className="flex items-center">
                  <span className="w-4 h-4 bg-emerald-400 rounded-full mr-3"></span>
                  <div>
                    <span className="font-medium block">Weight:</span>
                    <span className="text-emerald-100">105-140 pounds</span>
                  </div>
                </li>
                <li className="flex items-center">
                  <span className="w-4 h-4 bg-emerald-400 rounded-full mr-3"></span>
                  <div>
                    <span className="font-medium block">Coat:</span>
                    <span className="text-emerald-100">
                      Rough, wiry double coat with a soft underlayer and
                      pronounced beard
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-emerald-800 to-emerald-900 rounded-xl p-8 shadow-xl">
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <span className="bg-emerald-700 p-2 rounded-full mr-4">
                  <Brain className="w-6 h-6 text-emerald-300" />
                </span>
                Temperament
              </h3>
              <ul className="space-y-6">
                <li className="flex items-center">
                  <span className="w-4 h-4 bg-emerald-400 rounded-full mr-3"></span>
                  <div>
                    <span className="font-medium block">Personality:</span>
                    <span className="text-emerald-100">
                      Gentle, dignified, and courteous — affectionate but never
                      demanding
                    </span>
                  </div>
                </li>
                <li className="flex items-center">
                  <span className="w-4 h-4 bg-emerald-400 rounded-full mr-3"></span>
                  <div>
                    <span className="font-medium block">Intelligence:</span>
                    <span className="text-emerald-100">
                      Responsive to kind training, eager to please, and highly
                      perceptive
                    </span>
                  </div>
                </li>
                <li className="flex items-center">
                  <span className="w-4 h-4 bg-emerald-400 rounded-full mr-3"></span>
                  <div>
                    <span className="font-medium block">Sociability:</span>
                    <span className="text-emerald-100">
                      Exceptional with children and other pets when properly
                      socialized
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Ready to Welcome an Irish Wolfhound Into Your Home?
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Our puppies are hand-raised with early enrichment, veterinary care,
            and socialization so they grow into steady, affectionate giants.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/available-puppies"
              className="inline-block bg-emerald-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-emerald-700 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              View Available Puppies
            </a>
            <a
              href="/contact"
              className="inline-block bg-gray-100 text-gray-800 font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-gray-200 transition-all duration-300 hover:scale-105"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Content;
