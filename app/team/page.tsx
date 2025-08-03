
"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Github } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function TeamPage() {
  const faculty = [
    {
      name: "Dr. Sushil Kumar",
      position: "HOD & Faculty Advisor",
      image: "/HOD.jpg",
      email: "sushil.kumar@cgc.edu.in",
      linkedin: "#",
    },
    {
      name: "Dr. Makiran Kaur",
      position: "Faculty Mentor",
      image: "/maam.jpg",
      email: "makiran.kaur@cgc.edu.in",
      linkedin: "#",
    },
  ];

  const leadership = [
    {
      name: "Sarang Alhawat",
      position: "President",
      image: "/Sarang.png",
      email: "sarang@ecell.cgc.edu.in",
      linkedin: "https://www.linkedin.com/in/sarang-ahlawat/",
      github: "#",
    },
    {
      name: "Aashi Raghuwanshi",
      position: "Vice President",
      image: "/aashi.jpg",
      email: "aashi@ecell.cgc.edu.in",
      linkedin: "#",
      github: "#",
    },
  ];

  const teams = [
    {
      title: "Technical Team",
      members: [
        {
          name: "Kanan Kango",
          position: "Tech Lead",
          image: "/Kanan.JPG",
          email: "rahul@ecell.cgc.edu.in",
        },
        {
          name: "Shree Sharma",
          position: "#",
          image: "/WhatsApp Image 2025-06-18 at 18.24.44_9126fff7.jpg",
          email: "shree@ecell.cgc.edu.in",
        },
      ],
    },
    {
      title: "Student Advisor",
      members: [
        {
          name: "Harshita",
          position: "#",
          image: "/harshital.png",
          email: "harshita@ecell.cgc.edu.in",
        }
      ],
    },
    {
      title: "Documentation and Operations Team",
      members: [
        {
          name: "Unnati Negi",
          position: "#",
          image: "/Unnati.jpg",
          email: "unnati@ecell.cgc.edu.in",
        },
        {
          name: "Ishita",
          position: "#",
          image: "/Ishita.jpg",
          email: "arjun@ecell.cgc.edu.in",
        },
        {
          name: "Loveneet",
          position: "#",
          image: "/member.jpg",
          email: "loveneet@ecell.cgc.edu.in",
        },
      ],
    },
    {
      title: "Innovation Team",
      members: [
        {
          name: "Rujul Gupta",
          position: "#",
          image: "/Rujul.jpg",
          email: "rujul@ecell.cgc.edu.in",
        },
        {
          name: "Smriti",
          position: "#",
          image: "/Smriti].jpg",
          email: "smriti@ecell.cgc.edu.in",
        },
      ],
    },
    {
      title: "External Operations and PR Team",
      members: [
        {
          name: "Lakshya Rustagi",
          position: "External Operations and Innovation Head ",
          image: "/Lakshay.jpg",
          email: "lakshay@ecell.cgc.edu.in",
        },
        {
          name: "Ojas Tyagi",
          position: "#",
          image: "/Ojas.jpg",
          email: "ojas@ecell.cgc.edu.in",
        },
        {
          name: "Manav",
          position: "#",
          image: "/Manav.jpg",
          email: "manav@ecell.cgc.edu.in",
        },
        {
          name: "Kushagra Kwatra",
          position: "#",
          image: "/Kushagra.jpg",
          email: "kushagra@ecell.cgc.edu.in",
        },
      ],
    },
    {
      title: "Design Team",
      members: [
        {
          name: "Lavanya",
          position: "#",
          image: "/Lavanya.jpg",
          email: "lavanyat@ecell.cgc.edu.in",
        },
        {
          name: "Kamakshi",
          position: "#",
          image: "/kamakshi",
          email: "kamakshi@ecell.cgc.edu.in",
        },
      ],
    },
    {
      title: "Social Media Team",
      members: [
        {
          name: "Sampark",
          position: "",
          image: "/Sampark.jpg",
          email: "samparkt@ecell.cgc.edu.in",
        },
      ],
    },
    {
      title: "Video Editing Team",
      members: [
        {
          name: "Vibhor",
          position: "",
          image: "/Vibhor.jpg",
          email: "vibhor@ecell.cgc.edu.in",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-yellow-400 bg-clip-text text-transparent">
              Our Team
            </h1>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Meet the passionate individuals driving innovation and entrepreneurship at CGC COE
            </p>
          </motion.div>
        </div>
      </section>

      {/* Big Image Section */}
      <div className="w-full flex justify-center my-10">
        <img
          src="/Team.jpg"
          alt="Team Banner"
          className="max-w-4xl w-full rounded-lg shadow-lg"
        />
      </div>

      {/* Faculty Section */}
      {/* --- (Rest of your JSX stays the same) --- */}
      
      <Footer />
    </div>
  );
}

