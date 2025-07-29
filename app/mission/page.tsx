"use client"

import { motion } from "framer-motion"
import { Target, Users, Lightbulb, Award, Globe, Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function MissionPage() {
  const values = [
    {
      icon: Target,
      title: "Vision",
      description:
        "To be the leading entrepreneurship hub in North India, nurturing innovation and creating sustainable businesses that make a positive impact on society.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We believe in the power of creative thinking and provide platforms for students to transform their groundbreaking ideas into reality.",
    },
    {
      icon: Users,
      title: "Community",
      description:
        "Building a strong network of entrepreneurs, mentors, and industry experts who support and inspire each other.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "Maintaining the highest standards in mentorship, resources, and support for our entrepreneurial community.",
    },
    {
      icon: Globe,
      title: "Impact",
      description:
        "Creating ventures that not only generate profit but also contribute to solving real-world problems and creating positive change.",
    },
    {
      icon: Heart,
      title: "Passion",
      description:
        "Fostering a culture of passion and dedication where entrepreneurs can pursue their dreams with unwavering commitment.",
    },
  ]

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
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-yellow-400 bg-clip-text text-transparent">
              Our Mission
            </h1>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              To foster an entrepreneurial ecosystem that transforms innovative ideas into successful ventures, creating
              the next generation of business leaders and change-makers who will shape the future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Core Values</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The principles that guide everything we do at E-Cell CGC COE
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <Card className="bg-gray-900 border-gray-800 hover:border-yellow-400 transition-all duration-300 h-full">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <value.icon className="h-8 w-8 text-black" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-yellow-400 transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-yellow-400 bg-clip-text text-transparent">
              What We Stand For
            </h2>
            <div className="space-y-8 text-lg text-gray-300 leading-relaxed">
              <p>
                At E-Cell CGC COE, we believe that entrepreneurship is not just about starting businesses—it's about
                creating solutions that matter, building communities that thrive, and fostering innovation that changes
                lives.
              </p>
              <p>
                We are committed to providing our students with the knowledge, resources, and network they need to turn
                their entrepreneurial dreams into reality. Through mentorship, workshops, competitions, and real-world
                experience, we prepare the next generation of leaders to tackle tomorrow's challenges.
              </p>
              <p>
                Our mission extends beyond the classroom and campus. We aim to create a lasting impact on the
                entrepreneurial ecosystem of our region and contribute to the economic growth and innovation of our
                nation.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
