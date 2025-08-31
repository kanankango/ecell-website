"use client";

import { motion } from "framer-motion";
import { Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import WhatsAppIcon from "@/components/icons/whatsapp";
import Link from "next/link";

export default function Footer() {
  const socialLinks = [
    {
      icon: Instagram,
      href: "https://www.instagram.com/ecell.cgc.coe?igsh=MWRpYnAwYXAzZGhhMg==",
      label: "Instagram",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/ecellcgccoe/",
      label: "LinkedIn",
    },
    {
      icon: WhatsAppIcon,
      href: "https://chat.whatsapp.com/E5AtfzSz5rS0Dk2svuw3rQ?mode=ac_t",
      label: "WhatsApp",
    },
  ];

  return (
    <footer className="bg-black border-t border-golden-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 group">
              <img
                src="/logo.jpg"
                alt="E-Cell CGC Logo"
                className="w-10 h-10 rounded-full border-2 border-golden-300 shadow-[0_0_10px_rgba(255,215,0,0.25)] object-cover group-hover:border-golden-200 transition-all duration-300 glow-golden"
              />
              <span className="text-white font-bold text-xl group-hover:text-golden-300 transition-colors duration-300">
                E-CELL CGC
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Empowering the next generation of entrepreneurs at Chandigarh
              Group of Colleges, COE.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-gray-400 hover:text-golden-300 hover:bg-gray-800 border border-transparent hover:border-golden-300 transition-all duration-300 glow-golden"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {["About Us", "Our Mission", "Initiatives", "Events", "Blog"].map(
                (link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-golden-300 transition-colors duration-300 border-b border-transparent hover:border-golden-300"
                    >
                      {link}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Programs</h3>
            <ul className="space-y-2">
              {[
                "Startup Incubation",
                "Mentorship",
                "Workshops",
                "Pitch Competitions",
                "Networking",
              ].map((program) => (
                <li key={program}>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-golden-300 transition-colors duration-300 border-b border-transparent hover:border-golden-300"
                  >
                    {program}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Contact Us
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400 group">
                <MapPin className="h-5 w-5 text-golden-300 group-hover:text-golden-200 transition-colors duration-300" />
                <span className="text-sm group-hover:text-golden-300 transition-colors duration-300">
                  CGC COE, Landran, Mohali
                </span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 group">
                <Phone className="h-5 w-5 text-golden-300 group-hover:text-golden-200 transition-colors duration-300" />
                <span className="text-sm group-hover:text-golden-300 transition-colors duration-300">
                  +91 98765 43210
                </span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 group">
                <Mail className="h-5 w-5 text-golden-300 group-hover:text-golden-200 transition-colors duration-300" />
                <span className="text-sm group-hover:text-golden-300 transition-colors duration-300">
                  ecell@cgc.edu.in
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-golden-300 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} E-Cell CGC COE. All rights reserved. |
            Designed with ❤️ for Innovation
          </p>
        </div>
      </div>
    </footer>
  );
}
