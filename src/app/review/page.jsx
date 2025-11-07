"use client";
import Banner from "@/components/Banner/Banner";
import Navbar from "@/components/Navbar/Navbar";
import React, { useState } from "react";
import Footer from "@/components/Footer.jsx/page";
import {
  Star,
  Quote,
  MessageCircle,
  Heart,
  ThumbsUp,
  MapPin,
  Calendar,
} from "lucide-react";
import Image from "next/image";

function TestimonialsPage() {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    review: "",
    rating: 5,
  });

  const [hoveredRating, setHoveredRating] = useState(0);
  const [selectedRating, setSelectedRating] = useState(5);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleRatingChange = (rating) => {
    setSelectedRating(rating);
    setFormData((prevState) => ({
      ...prevState,
      rating: rating,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Review submitted:", formData);
    setFormData({
      name: "",
      location: "",
      review: "",
      rating: 5,
    });
    setSelectedRating(5);
    alert("Thank you for your review! We appreciate your feedback.");
  };

  const testimonials = [
    {
      name: "Emma & David Johnson",
      text: "Our Irish Wolfhound, Thor, has brought so much love and laughter into our home. He is respectful with our toddlers, yet loves stretching his long legs on weekend hikes. His calm nature makes him a perfect fit for busy family life.",
      location: "Ontario",
      date: "February 2026",
      image: "/image-im/WhatsApp%20Image%202025-11-03%20at%2021.00.33_b12636c8.jpg",
      rating: 5,
    },
    {
      name: "Michael Wilson",
      text: "Maeve is my first Irish Wolfhound and she has exceeded every expectation. She shadows me from room to room, greets everyone with the softest eyes, and settles happily at my feet while I work from home.",
      location: "Alberta",
      date: "December 2025",
      image: "/image-im/WhatsApp%20Image%202025-11-03%20at%2021.00.34_2db26b7c.jpg",
      rating: 5,
    },
    {
      name: "Sarah & Thomas Clark",
      text: "Rua joined our household of young kids and instantly became their gentle guardian. Tariq guided us through training tips specific to Wolfhounds, and Rua’s confidence and sweetness show how well she was raised.",
      location: "British Columbia",
      date: "November 2025",
      image: "/image-im/WhatsApp%20Image%202025-11-03%20at%2021.00.34_953c1e6f.jpg",
      rating: 5,
    },
    {
      name: "Jennifer Martinez",
      text: "Bran is enormous, but he’s also the biggest cuddle bug. He mastered leash manners quickly and loves weekend adventures. Tariq’s ongoing support has made the transition seamless.",
      location: "Quebec",
      date: "October 2025",
      image: "/image-im/WhatsApp%20Image%202025-11-03%20at%2021.00.34_9aa57280.jpg",
      rating: 5,
    },
    {
      name: "Robert & Olivia Thompson",
      text: "We were amazed at how calm and polite our Wolfhound, Finn, was from day one. Tariq provided detailed care notes, and Finn’s gentle nature has made him a therapy-dog-in-training already.",
      location: "Manitoba",
      date: "September 2025",
      image: "/image-im/WhatsApp%20Image%202025-11-03%20at%2021.00.35_105ae104.jpg",
      rating: 5,
    },
    {
      name: "Daniel Lee",
      text: "Aoife is the most affectionate dog I’ve ever owned. She’s relaxed indoors but loves stretching out on runs. Her temperament reflects the thoughtful breeding and early socialization she received.",
      location: "Nova Scotia",
      date: "August 2025",
      image: "/image-im/WhatsApp%20Image%202025-11-03%20at%2021.00.36_31baf88a.jpg",
      rating: 5,
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
        <div className="relative h-full w-full text-center flex flex-col justify-center items-center text-white px-4">
          <span className="text-emerald-300 uppercase tracking-wider font-semibold mb-2">
            Customer Testimonials
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Voices of Our Irish Wolfhound Community
          </h1>
          <p className="text-xl text-emerald-100 max-w-3xl">
            Discover why families choose Tariq’s Irish Wolfhound puppies as their
            loyal companions and lifelong friends.
          </p>
          <div className="flex justify-center gap-1 mt-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-emerald-300 fill-current" />
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="bg-emerald-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <ThumbsUp className="w-8 h-8 text-emerald-500" />
            </div>
            <div className="text-4xl font-bold text-emerald-800 mb-2">100%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="bg-emerald-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-emerald-500" />
            </div>
            <div className="text-4xl font-bold text-emerald-800 mb-2">15+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="bg-emerald-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8 text-emerald-500" />
            </div>
            <div className="text-4xl font-bold text-emerald-800 mb-2">500+</div>
            <div className="text-gray-600">Happy Families</div>
          </div>
        </div>

        {/* Featured Testimonial */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <span className="text-emerald-600 font-medium">
              CUSTOMER STORIES
            </span>
            <h2 className="text-3xl font-bold mt-2 text-gray-800">
              What Our Customers Say
            </h2>
            <div className="w-24 h-1 bg-emerald-500 mx-auto mt-4"></div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <div className="relative h-64 md:h-full w-full rounded-xl overflow-hidden">
                  <Image
                    src="/image-im/WhatsApp%20Image%202025-11-03%20at%2021.00.37_cac7e83e.jpg"
                    alt="Happy family with Irish Wolfhound"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:w-2/3">
                <Quote className="w-12 h-12 text-emerald-300 mb-6" />
                <p className="text-xl text-gray-700 leading-relaxed mb-8 italic">
                  "Our Irish Wolfhound, Niamh, has completely transformed our
                  lives. Her gentle giant personality and intuition continue to
                  amaze us every day. Tariq was incredibly knowledgeable and
                  supportive throughout the entire process, from matching us to
                  arrival day. Niamh is now an irreplaceable member of our
                  family, and we couldn’t imagine life without her!"
                </p>
                <div className="flex items-center">
                  <div className="mr-4">
                    <h3 className="font-semibold text-xl text-gray-900">
                      The Williams Family
                    </h3>
                    <div className="flex items-center text-gray-500 mt-1">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>Vancouver, BC</span>
                    </div>
                  </div>
                  <div className="ml-auto flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-emerald-400 fill-current"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 transform hover:-translate-y-2 
                transition-all duration-300 border border-gray-100"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-start">
                  <div className="mr-4">
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-emerald-400 fill-current"
                        />
                      ))}
                    </div>
                  </div>
                  <Quote className="w-8 h-8 text-emerald-200" />
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                "{testimonial.text}"
              </p>
              <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <div className="flex items-center text-gray-500 text-sm mt-1">
                    <MapPin className="w-3 h-3 mr-1" />
                    <span>{testimonial.location}</span>
                    <span className="mx-2">•</span>
                    <Calendar className="w-3 h-3 mr-1" />
                    <span>{testimonial.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Review Form Section */}
        <div className="max-w-3xl mx-auto px-4 py-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100">
            <div className="text-center mb-8">
              <span className="text-emerald-600 font-medium">YOUR TURN</span>
              <h2 className="text-3xl font-bold mt-2 text-gray-800">
                Share Your Experience
              </h2>
              <div className="w-24 h-1 bg-emerald-500 mx-auto mt-4 mb-4"></div>
              <p className="text-gray-600">
                We'd love to hear about your experience with your Irish Wolfhound!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label
                    htmlFor="location"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Province"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="rating"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Rating
                </label>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <Star
                      key={rating}
                      className={`w-8 h-8 cursor-pointer ${
                        hoveredRating >= rating || selectedRating >= rating
                          ? "text-emerald-400 fill-current"
                          : "text-gray-300"
                      }`}
                      onMouseEnter={() => setHoveredRating(rating)}
                      onMouseLeave={() => setHoveredRating(0)}
                      onClick={() => handleRatingChange(rating)}
                    />
                  ))}
                  <span className="ml-2 text-gray-600">
                    {selectedRating} out of 5 stars
                  </span>
                </div>
              </div>

              <div>
                <label
                  htmlFor="review"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Review
                </label>
                <textarea
                  id="review"
                  name="review"
                  value={formData.review}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Share your experience with your Irish Wolfhound..."
                />
              </div>

              <div className="flex justify-center pt-4">
                <button
                  type="submit"
                  className="px-8 py-3 bg-emerald-600 text-white font-semibold rounded-full hover:bg-emerald-700 
                            transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                >
                  Submit Your Review
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
}

export default TestimonialsPage;
