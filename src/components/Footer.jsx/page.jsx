import React from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  MessageCircle,
} from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">About Us</h2>
            <p className="text-gray-300 leading-relaxed">
              Tariq's Irish Wolfhound Puppies is devoted to raising confident,
              well-mannered Irish Wolfhound companions. We focus on sound
              genetics, early socialization, and lifelong breeder support so
              every family can enjoy the magic of this legendary breed.
            </p>
            <div className="flex space-x-4"></div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Quick Links</h2>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/available-puppies"
                  className="text-gray-300 hover:text-emerald-300 transition-colors"
                >
                  Available Puppies
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping"
                  className="text-gray-300 hover:text-emerald-300 transition-colors"
                >
                  Shipping Information
                </Link>
              </li>
              <li>
                <Link
                  href="/health"
                  className="text-gray-300 hover:text-emerald-300 transition-colors"
                >
                  Health Guarantee
                </Link>
              </li>

              <li>
                <Link
                  href="/faq"
                  className="text-gray-300 hover:text-emerald-300 transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Contact Us</h2>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-emerald-400" />
                <Link
                  href="mailto:tariqsirishwolfhounds@gmail.com"
                  className="text-gray-300 hover:text-emerald-300 transition-colors"
                >
                  tariqsirishwolfhounds@gmail.com
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Newsletter</h2>
            <p className="text-gray-300">
              Subscribe for litter announcements, training resources, and Irish
              Wolfhound care tips from Tariq's Irish Wolfhound Puppies.
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400">
            Copyright © {currentYear} Tariq's Irish Wolfhound Puppies. All
            rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-emerald-300 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-400 hover:text-emerald-300 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
