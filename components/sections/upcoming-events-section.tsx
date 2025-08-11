"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Clock, Users } from "lucide-react"

export default function UpcomingEventsSection() {
  const upcomingEvent = {
    title: "Innovision",
    description:
      "Join us for Innovision- an exciting entrepreneurship event where innovation meets opportunity. Connect with like-minded individuals and showcase your ideas.",
    date: "August 5, 2025",
    time: "10:00 AM - 1:00 PM",
    location: "CGC COE Auditorium",
    attendees: "100+ Expected",
    registrationFee: "₹10",
    image: "/public/upcoming event .jpg",
    registrationOpen: true,
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
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Upcoming Event
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">Don't miss our next big event - mark your calendar!</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-white border-black hover:border-yellow-400 transition-all duration-300 overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={upcomingEvent.image || "/public/upcoming event .jpg"}
                  alt={upcomingEvent.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-yellow-400 text-black text-sm font-semibold rounded-full">
                      Featured Event
                    </span>
                    {upcomingEvent.registrationOpen && (
                      <span className="px-3 py-1 bg-green-500 text-white text-sm font-semibold rounded-full">
                        Registration Open
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-black">{upcomingEvent.title}</h3>

                  <p className="text-gray-700 mb-6 leading-relaxed">{upcomingEvent.description}</p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-3 text-black">
                      <Calendar className="h-5 w-5 text-yellow-400" />
                      <span>{upcomingEvent.date}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-black">
                      <Clock className="h-5 w-5 text-yellow-400" />
                      <span>{upcomingEvent.time}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-black">
                      <MapPin className="h-5 w-5 text-yellow-400" />
                      <span>{upcomingEvent.location}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-black">
                      <Users className="h-5 w-5 text-yellow-400" />
                      <span>{upcomingEvent.attendees}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-black">
                      <span className="h-5 w-5 text-yellow-400 font-bold">₹</span>
                      <span>Registration Fee: {upcomingEvent.registrationFee}</span>
                    </div>
                  </div>

                  <Button
                    size="lg"
                    className="w-full bg-yellow-400 text-black hover:bg-yellow-500 font-semibold py-3 rounded-full transition-all duration-300 transform hover:scale-105"
                  >
                    Register Now
                  </Button>
                </CardContent>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
