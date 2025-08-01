"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Linkedin, Github } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function TeamPage() {
  const faculty = [
    {
      name: "Dr. Sushil Kumar",
      position: "HOD & Faculty Advisor",
      image: "/sushil.jpg",
    },
  ]

  const leadership = [
    {
      name: "Aryan Singh",
      position: "President",
      image: "/aryan.jpg",
    },
    {
      name: "Harshit Tiwari",
      position: "Vice President",
      image: "/harshit.jpg",
    },
    {
      name: "Shree Sharma",
      position: "Technical Head",
      image: "/shree.jpg",
      linkedin: "https://linkedin.com/in/your-link",
      github: "https://github.com/your-profile",
    },
  ]

  const teams = [
    {
      title: "Design Team",
      members: [
        {
          name: "Kamakshi",
          image: "/kamakshi.jpg",
        },
        {
          name: "Smriti",
          image: "/smriti.jpg",
        },
      ],
    },
    {
      title: "Content Team",
      members: [
        {
          name: "Kavya",
          image: "/kavya.jpg",
        },
        {
          name: "Anbi",
          image: "/anbi.jpg",
        },
      ],
    },
    {
      title: "Video Editing Team",
      members: [
        {
          name: "Vibhor",
          image: "/vibhor.jpg",
        },
      ],
    },
  ]

  const fallbackImg = "/placeholder.jpg"

  return (
    <>
      <Navbar />

      <section className="text-center py-10 bg-gradient-to-r from-[#ffb4a2] to-[#b5838d] text-white">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold"
        >
          Meet Our Team
        </motion.h1>
        <p className="mt-2 text-xl">The backbone behind our success</p>
      </section>

      <section className="p-6">
        <h2 className="text-3xl font-semibold text-center mb-6">Faculty Advisor</h2>
        <div className="flex justify-center gap-6 flex-wrap">
          {faculty.map((person, idx) => (
            <Card key={idx} className="w-80 shadow-xl">
              <CardContent className="p-4 flex flex-col items-center">
                <img
                  src={person.image || fallbackImg}
                  alt={person.name}
                  className="w-40 h-40 object-cover rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold">{person.name}</h3>
                <p className="text-gray-600">{person.position}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="p-6">
        <h2 className="text-3xl font-semibold text-center mb-6">Leadership</h2>
        <div className="flex justify-center gap-6 flex-wrap">
          {leadership.map((person, idx) => (
            <Card key={idx} className="w-80 shadow-xl">
              <CardContent className="p-4 flex flex-col items-center">
                <img
                  src={person.image || fallbackImg}
                  alt={person.name}
                  className="w-40 h-40 object-cover rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold">{person.name}</h3>
                <p className="text-gray-600 mb-2">{person.position}</p>
                <div className="flex gap-3 text-gray-500">
                  {person.linkedin && (
                    <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin />
                    </a>
                  )}
                  {person.github && (
                    <a href={person.github} target="_blank" rel="noopener noreferrer">
                      <Github />
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {teams.map((team, idx) => (
        <section key={idx} className="p-6">
          <h2 className="text-2xl font-semibold text-center mb-4">{team.title}</h2>
          <div className="flex justify-center gap-6 flex-wrap">
            {team.members.map((member, i) => (
              <Card key={i} className="w-72 shadow-lg">
                <CardContent className="p-4 flex flex-col items-center">
                  <img
                    src={member.image || fallbackImg}
                    alt={member.name}
                    className="w-32 h-32 object-cover rounded-full mb-3"
                  />
                  <h4 className="text-lg font-medium">{member.name}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      ))}

      <Footer />
    </>
  )
}

