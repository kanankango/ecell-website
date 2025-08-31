"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Github, Star } from "lucide-react";
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
      image: "/Sarang .jpg",
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
      title: "Documentation and Operations Team",
      members: [
        {
          name: "Unnati Negi",
          position: "#",
          image: "/Unnati.jpg",
          email: "unnati@ecell.cgc.edu.in",
        },
        {
          name: "Kanan Kango",
          position: "#",
          image: "/Kanan.JPG",
          email: "kanan@ecell.cgc.edu.in",
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
          email: "arjun@ecell.cgc.edu.in",
        },
      ],
    },
    {
      title: "External Operations and Innovation Team",
      members: [
        {
          name: "Lakshya",
          position: "External Operations and Innovation Head ",
          image: "/Lakshay.jpg",
          email: "lakshay@ecell.cgc.edu.in",
        },
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
          image: "/Kamakshi.jpg",
          email: "kamakshi@ecell.cgc.edu.in",
        },
      ],
    },
    {
      title: "Video Editing Team",
      members: [
        {
          name: "Sampark",
          position: "",
          image: "/Sampark.jpg",
          email: "samparkt@ecell.cgc.edu.in",
        },
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
      <section className="pt-24 pb-16 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center mb-6">
              <Star className="h-8 w-8 text-golden-300 mr-4 animate-pulse" />
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-golden-300 to-golden-200 bg-clip-text text-transparent glow-golden-text">
                Our Team
              </h1>
              <Star className="h-8 w-8 text-golden-300 ml-4 animate-pulse" />
            </div>
            <div className="w-32 h-1 bg-gradient-to-r from-golden-300 to-golden-200 mx-auto mb-8 glow-golden rounded-full"></div>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Meet the passionate individuals driving innovation and
              entrepreneurship at CGC COE
            </p>
          </motion.div>
        </div>
      </section>

      {/* Image Banner Section */}
      <div className="w-full flex justify-center my-10">
        <div className="relative max-w-4xl w-full">
          <img
            src="/Team.jpg"
            alt="Team Banner"
            className="w-full rounded-lg shadow-2xl border-2 border-golden-300 glow-golden"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
        </div>
      </div>

      {/* Faculty Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              <span className="text-golden-300">Faculty</span> Advisors
            </h2>
            <div className="w-16 h-0.5 bg-golden-300 mx-auto mb-4"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our experienced faculty members who guide and mentor our
              entrepreneurial journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faculty.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <Card className="bg-black border-2 border-gray-800 hover:border-golden-300 transition-all duration-300 h-full glow-golden shadow-xl">
                  <CardContent className="p-8 text-center">
                    <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-golden-300 glow-golden shadow-lg">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-golden-300 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-golden-300 font-semibold mb-4 bg-gradient-to-r from-golden-300 to-golden-200 bg-clip-text text-transparent">
                      {member.position}
                    </p>
                    <div className="flex justify-center space-x-4">
                      <a
                        href={`mailto:${member.email}`}
                        className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-golden-300 hover:bg-gray-700 border border-transparent hover:border-golden-300 transition-all duration-300 shadow-lg"
                      >
                        <Mail className="h-5 w-5" />
                      </a>
                      <a
                        href={member.linkedin}
                        className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-golden-300 hover:bg-gray-700 border border-transparent hover:border-golden-300 transition-all duration-300 shadow-lg"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              <span className="text-golden-300">Leadership</span> Team
            </h2>
            <div className="w-16 h-0.5 bg-golden-300 mx-auto mb-4"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Student leaders who drive our vision and inspire the
              entrepreneurial community
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {leadership.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <Card className="bg-gray-900 border-2 border-gray-800 hover:border-golden-300 transition-all duration-300 h-full glow-golden shadow-xl">
                  <CardContent className="p-8 text-center">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-golden-300 glow-golden shadow-lg">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-golden-300 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-golden-300 font-semibold mb-4 bg-gradient-to-r from-golden-300 to-golden-200 bg-clip-text text-transparent">
                      {member.position}
                    </p>
                    <div className="flex justify-center space-x-3">
                      <a
                        href={`mailto:${member.email}`}
                        className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-golden-300 hover:bg-gray-700 border border-transparent hover:border-golden-300 transition-all duration-300 shadow-lg"
                      >
                        <Mail className="h-4 w-4" />
                      </a>
                      <a
                        href={member.linkedin}
                        title={`View ${member.name}'s LinkedIn`}
                        className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-golden-300 hover:bg-gray-700 border border-transparent hover:border-golden-300 transition-all duration-300 shadow-lg"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                      <a
                        href={member.github}
                        className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-golden-300 hover:bg-gray-700 border border-transparent hover:border-golden-300 transition-all duration-300 shadow-lg"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              <span className="text-golden-300">Team</span> Members
            </h2>
            <div className="w-16 h-0.5 bg-golden-300 mx-auto mb-4"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Dedicated team members working across different domains to make
              E-Cell successful
            </p>
          </motion.div>

          <div className="space-y-16">
            {teams.map((team, teamIndex) => (
              <motion.div
                key={teamIndex}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: teamIndex * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-golden-300 glow-golden-text mb-2">
                    {team.title}
                  </h3>
                  <div className="w-12 h-0.5 bg-golden-300 mx-auto"></div>
                </div>
                <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                  {team.members.map((member, memberIndex) => (
                    <motion.div
                      key={memberIndex}
                      initial={{
                        opacity: 0,
                        x: memberIndex % 2 === 0 ? -50 : 50,
                      }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1, delay: memberIndex * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      className="group"
                    >
                      <Card className="bg-black border-2 border-gray-800 hover:border-golden-300 transition-all duration-300 glow-golden shadow-xl">
                        <CardContent className="p-6 text-center">
                          <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-golden-300 glow-golden shadow-lg">
                            <img
                              src={member.image || "/placeholder.svg"}
                              alt={member.name}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                          <h4 className="text-lg font-bold mb-1 text-white group-hover:text-golden-300 transition-colors">
                            {member.name}
                          </h4>
                          <p className="text-gray-400 text-sm mb-3">
                            {member.position}
                          </p>
                          <a
                            href={`mailto:${member.email}`}
                            title={`Send email to ${member.name}`}
                            className="inline-flex items-center justify-center w-8 h-8 bg-gray-800 rounded-full text-gray-400 hover:text-golden-300 hover:bg-gray-700 border border-transparent hover:border-golden-300 transition-all duration-300 shadow-lg"
                            aria-label={`Send email to ${member.name}`}
                          >
                            <Mail
                              className="h-4 w-4"
                              aria-label={`Send email to ${member.name}`}
                            />
                          </a>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
