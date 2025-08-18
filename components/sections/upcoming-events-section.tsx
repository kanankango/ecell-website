"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, Clock, Users } from "lucide-react"

export default function UpcomingEventsSection() {
  const upcomingEvent = {
    title: "Eureka! Pitching Competition",
    description:
      "A flagship event bringing together brilliant minds to brainstorm and build impactful solutions.",
    date: "21 August 2025",
    time: "10 AM – 4:30 PM",
    location: "Main Auditorium",
    registrationFee: "Registration Fee - Free",
  }

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="mb-8 flex justify-center">
            <span className="inline-block">
              <h2 className="text-4xl md:text-6xl font-bold text-white">Upcoming Events</h2>
              <span className="block h-1 bg-yellow-400 rounded-full mt-3"></span>
            </span>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">Don't miss our next big event - mark your calendar!</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto"
        >
          <Card className="bg-gray-900 border-gray-800 shadow transition-all duration-300 overflow-hidden">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">{upcomingEvent.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{upcomingEvent.description}</p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Calendar className="h-5 w-5 text-yellow-400" />
                  <span className="text-white">{upcomingEvent.date}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Clock className="h-5 w-5 text-yellow-400" />
                  <span className="text-white">{upcomingEvent.time}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="h-5 w-5 text-yellow-400" />
                  <span className="text-white">{upcomingEvent.location}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <span className="font-bold text-yellow-400">₹</span>
                  <span className="text-white">{upcomingEvent.registrationFee}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
